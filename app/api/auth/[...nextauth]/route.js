import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma/prismadb';

export const OPTIONS = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing credentials', { status: 400 });
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email?.toLowerCase(),
          },
        });

        if (!user?.hashedPassword) {
          throw new Error('No user found', { status: 404 });
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isValid) {
          throw new Error('Invalid credentials', {
            status: 400,
          });
        }
        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) session.user.id = token.uid;
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth({ adapter: PrismaAdapter(prisma), ...OPTIONS });
export { handler as GET, handler as POST };
