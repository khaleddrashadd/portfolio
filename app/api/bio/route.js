import { NextResponse } from 'next/server';
import { currentUser } from '@/actions/getCurrentUser';
import { prisma } from '@/lib/prisma/prismadb';

export async function POST(req) {
  const body = await req.json();
  const { bio, cv, imgUrl } = body;

  let query = {};
  if (bio) query.bio = bio;
  if (cv) query.cv = cv;
  if (imgUrl) query.imgUrl = imgUrl;

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  const updateduserData = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: query,
  });
  return NextResponse.json(updateduserData);
}

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }
  const userData = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      bio: true,
      cv: true,
      imgUrl: true,
    },
  });
  return NextResponse.json(userData);
}
