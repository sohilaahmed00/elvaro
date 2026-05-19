import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_elvaro_2026_!@#';

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, password } = body;

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'All fields (name, email, password) are required.' },
        { status: 400 }
      );
    }

    // Check password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long.' },
        { status: 400 }
      );
    }

    // Check if user exists
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return NextResponse.json(
        { error: 'A user with this email already exists.' },
        { status: 400 }
      );
    }

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
    });

    // Create JWT
    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Set HTTP-only Cookie
    const cookieStore = await cookies();
    cookieStore.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json({
      success: true,
      message: 'Signup successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    }, { status: 201 });

  } catch (error) {
    console.error('Signup API Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred during sign up.' },
      { status: 500 }
    );
  }
}
