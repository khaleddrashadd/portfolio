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
