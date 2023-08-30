'use client'
import { SessionProvider as Provider } from 'next-auth/react';

const SessionProvider = ({session,children}) => {
  return (
    <Provider
      baseUrl="http://localhost:3000/api/auth"
      session={session}>
      {children}
    </Provider>
  );
}
export default SessionProvider