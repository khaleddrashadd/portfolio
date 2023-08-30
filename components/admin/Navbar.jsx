'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="w-full flex items-center justify-center">
        <div className="sticky inset-x-0 top-2">
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
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;