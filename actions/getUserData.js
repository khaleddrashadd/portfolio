import { prisma } from '@/lib/prisma/prismadb';

export const getUserData = async () => {
  const userData = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      imgUrl: true,
      bio: true,
      cv: true,
      socialMedia: {
        select: {
          id: true,
          linkedin: true,
          github: true,
          x: true,
          facebook: true,
          whatsapp: true,
        },
      },
      skills: {
        select: {
          id: true,
          title: true,
          description: true,
          dateRange: true,
        },
      },
      projects: {
        select: {
          id: true,
          name: true,
          description: true,
          url: true,
          imgUrl: true,
        },
      },
    },
  });
  return userData[0];
};
