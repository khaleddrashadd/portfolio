'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoutButton } from '.';

const Navbar = ({ user }) => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="w-full flex items-center justify-center">
        <div className="sticky w-full inset-x-0 top-2 flex items-center justify-between">
          <ul className="w-full gap-10 justify-center bg-[#1d1e25] text-xl font-semibold text-zinc-400 p-4 rounded-2xl flex items-center">
            <li
              className={`hover:text-white transition cursor-pointer ${
                pathname === '/admin' && 'text-white'
              }`}>
              <Link href="/admin">Home</Link>
            </li>
            <li
              className={`hover:text-white transition cursor-pointer ${
                pathname === '/admin/skills' && 'text-white'
              }`}>
              <Link href="/admin/skills">Skills</Link>
            </li>
            <li
              className={`hover:text-white transition cursor-pointer ${
                pathname === '/admin/projects' && 'text-white'
              }`}>
              <Link href="/admin/projects">Projects</Link>
            </li>
            <li
              className={`hover:text-white transition cursor-pointer ${
                pathname === '/admin/social' && 'text-white'
              }`}>
              <Link href="/admin/social">Social Media</Link>
            </li>
            {!user ? (
              <>
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
              </>
            ) : (
              <div className="ml-10">
                <LogoutButton />
              </div>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
