import { NextResponse } from 'next/server';
import { currentUser } from '@/actions/getCurrentUser';
import { prisma } from '@/lib/prisma/prismadb';

export async function POST(req) {
  const body = await req.json();
  const { description, dateRange, title } = body;

  if (!title || !description || !dateRange) {
    return NextResponse.json(
      { error: 'You must fill out all fields' },
      { status: 400 }
    );
  }

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  const skills = await prisma.skill.create({
    data: {
      title,
      description,
      dateRange,
      userId: user.id,
    },
  });
  return NextResponse.json(skills);
}

export async function GET() {

  const skills = await prisma.skill.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return NextResponse.json(skills);
}