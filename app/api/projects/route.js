import { NextResponse } from 'next/server';
import { currentUser } from '@/actions/getCurrentUser';
import { prisma } from '@/lib/prisma/prismadb';

export async function POST(req) {
  const body = await req.json();
  const { name, description, url, imgUrl } = body;

  if (!name || !description || !url || !imgUrl) {
    return NextResponse.json(
      { error: 'You must fill out all fields' },
      { status: 400 }
    );
  }

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  const projects = await prisma.project.create({
    data: {
      name,
      description,
      url,
      imgUrl,
      userId: user.id,
    },
  });
  return NextResponse.json(projects);
}

export async function GET() {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
    }

  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return NextResponse.json(projects);
}
