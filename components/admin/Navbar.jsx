'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoutButton } from '.';
import { useSession } from 'next-auth/react';

const Navbar =  () => {
  const pathname = usePathname();
  const session = useSession();
  console.log("💥 ~ file: Navbar.jsx:10 ~ Navbar ~ session", session)


  return (
    <header>
      <nav className="w-full flex items-center justify-center">
        <div className="sticky inset-x-0 top-2 flex items-center justify-between">
          <ul className="w-full gap-10 justify-center md:w-880 bg-[#1d1e25] text-xl font-semibold text-zinc-400 p-4 rounded-2xl flex items-center">
            <li
              className={`hover:text-white transition cursor-pointer ${
                pathname === '/admin' && 'text-white'
              }`}>
              <Link href="/admin">Home</Link>
            </li>
            <li
              className={`hover:text-white transition cursor-pointer ${
                pathname === '/admin/login' && 'text-white'
              }`}>
              <Link href="/admin/login">Login</Link>
            </li>
            <li
              className={`hover:text-white transition cursor-pointer ${
                pathname === '/admin/register' && 'text-white'
              }`}>
              <Link href="/admin/register">Register</Link>
            </li>
            <div className="ml-10">
              <LogoutButton />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
