import { prisma } from '@/lib/prisma/prismadb';

export const getSkill = async (skillId) => {
  const skill = await prisma.skill.findUnique({
    where: {
      id: skillId,
    },
  });
  return skill;
};
