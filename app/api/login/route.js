import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma/prismadb';

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  if (!email.trim('')) {
    return NextResponse.json('Missing Email', {
      status: 400,
    });
  }

  if (!password.trim('')) {
    return NextResponse.json('Missing Password', {
      status: 400,
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json('User not found', { status: 404 });
    }
    const valid = await bcrypt.compare(password, user.hashedPassword);

    if (!valid) {
      return NextResponse.json('Invalid Password', { status: 400 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
