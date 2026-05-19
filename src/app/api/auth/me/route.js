import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/db';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_elvaro_2026_!@#';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get('token');

    if (!tokenCookie || !tokenCookie.value) {
      return NextResponse.json(
        { authenticated: false, error: 'No active session found.' },
        { status: 401 }
      );
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(tokenCookie.value, JWT_SECRET);
    } catch (err) {
      return NextResponse.json(
        { authenticated: false, error: 'Invalid or expired session token.' },
        { status: 401 }
      );
    }

    await connectDB();
    // Retrieve user and exclude password
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return NextResponse.json(
        { authenticated: false, error: 'User not found in database.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      authenticated: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    }, { status: 200 });

  } catch (error) {
    console.error('Auth Me API Error:', error);
    return NextResponse.json(
      { authenticated: false, error: 'An error occurred during authentication verification.' },
      { status: 500 }
    );
  }
}
