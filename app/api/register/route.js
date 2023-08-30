import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma/prismadb';

export async function POST(req) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name.trim('')) {
    return NextResponse.json('Missing Name', {
      status: 400,
    });
  }

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
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword: await bcrypt.hash(password, 12),
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
