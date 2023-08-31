import { NextResponse } from 'next/server';
import { currentUser } from '@/actions/getCurrentUser';
import { prisma } from '@/lib/prisma/prismadb';

export async function DELETE(req, { params: { projectId } }) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  await prisma.project.deleteMany({
    where: {
      id: projectId,
    },
  });
  return NextResponse.json({ success: true });
}

export async function PATCH(req, { params: { projectId } }) {
  const body = await req.json();
  const { name, description, url, imgUrl } = body;
  let query = {};

  if (name) query.name = name;
  if (description) query.description = description;
  if (url) query.url = url;
  if (imgUrl) query.imgUrl = imgUrl;

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  const updatedProject = await prisma.project.update({
    where: {
      id: projectId,
    },
    data: query,
  });
  return NextResponse.json(updatedProject);
}
