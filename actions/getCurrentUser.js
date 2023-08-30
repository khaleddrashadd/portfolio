import { getServerSession } from 'next-auth';
import { OPTIONS } from '@/app/api/auth/[...nextauth]/route';

const getSession = async () => {
  return await getServerSession(OPTIONS);
};

export const currentUser = async () => {
  try {
    const session = await getSession();
    if (!session?.user) {
      return null;
    }

    const { user } = session;
    return user;
  } catch (err) {
    return null;
  }
};
