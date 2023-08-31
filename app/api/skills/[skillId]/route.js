import { NextResponse } from 'next/server';
import { currentUser } from '@/actions/getCurrentUser';
import { prisma } from '@/lib/prisma/prismadb';

export async function DELETE(req, { params: { skillId } }) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  await prisma.skill.deleteMany({
    where: {
      id: skillId,
    },
  });
  return NextResponse.json({ success: true });
}

export async function PATCH(req, { params: { skillId } }) {
  const body = await req.json();
  const { title, description, dateRange } = body;
  let query = {};

  if (title) query.title = title;
  if (description) query.description = description;
  if (dateRange) query.dateRange = dateRange;

  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  const updatedSkill = await prisma.skill.update({
    where: {
      id: skillId,
    },
    data: query,
  });
  return NextResponse.json(updatedSkill);
}
