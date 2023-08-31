'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoutButton } from '.';

const MainNav = ({user}) => {
    const pathname = usePathname();

  return (
    <ul className="w-full gap-4 justify-center bg-[#1d1e25] text-normal md:text-xl font-semibold text-zinc-400 p-4 rounded-2xl hidden md:flex items-center">
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
  );
}
export default MainNav