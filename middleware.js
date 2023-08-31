export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/admin',
    '/admin/projects',
    '/admin/projects/:projectId*',
    '/admin/skills',
    '/admin/skills/:skillId*',
    '/admin/social',
  ],
};
