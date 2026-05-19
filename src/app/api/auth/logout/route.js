import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('token'); // Native way to delete a cookie in Next.js

    // Alternative robust fallback to ensure it is deleted
    cookieStore.set({
      name: 'token',
      value: '',
      httpOnly: true,
      path: '/',
      expires: new Date(0),
    });

    return NextResponse.json({
      success: true,
      message: 'Logged out successfully.',
    }, { status: 200 });

  } catch (error) {
    console.error('Logout API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred during logout.' },
      { status: 500 }
    );
  }
}
