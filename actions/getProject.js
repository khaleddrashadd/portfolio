import { prisma } from '@/lib/prisma/prismadb';

export const getProject = async (projectId) => {
  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });
  return project;
};
