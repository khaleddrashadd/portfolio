import { NextResponse } from 'next/server';
import { currentUser } from '@/actions/getCurrentUser';
import { prisma } from '@/lib/prisma/prismadb';

export async function POST(req) {
  const body = await req.json();
  const { linkedin, facebook, github, x, whatsapp,email } = body;

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  const social = await prisma.socialMedia.create({
    data: {
      linkedin,
      facebook,
      github,
      x,
      whatsapp,
      email,
      userId: user.id,
    },
  });
  return NextResponse.json(social);
}

export async function PATCH(req) {
  const body = await req.json();
  const { linkedin, facebook, github, x, whatsapp,email } = body;

  let query = {};
  if (linkedin) query.linkedin = linkedin;
  if (facebook) query.facebook = facebook;
  if (github) query.github = github;
  if (x) query.x = x;
  if (whatsapp) query.whatsapp = whatsapp;
  if (email) query.email = email;

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  const updatedSocial = await prisma.socialMedia.update({
    where: {
      userId: user.id,
    },
    data: query,
  });
  return NextResponse.json(updatedSocial);
}

export async function GET() {
  const user = await currentUser();
  const social = await prisma.socialMedia.findUnique({
    where: {
      userId: user.id,
    },
  });
  return NextResponse.json(social);
}
