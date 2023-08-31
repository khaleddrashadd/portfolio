import { NextResponse } from 'next/server';
import { currentUser } from '@/actions/getCurrentUser';
import { prisma } from '@/lib/prisma/prismadb';

export async function DELETE(req, { params: { skillId } }) {
  console.log(skillId, '🤡');
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
