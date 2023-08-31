'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { LogoutButton } from '.';

const MenuNav = ({ user }) => {
  const pathname = usePathname();
  const [isopen, setIsOpen] = useState(false);

  if (!isopen) {
    return (
      <div
        className="md:hidden w-full items-center flex justify-end"
        onClick={() => setIsOpen((prev) => !prev)}>
        <IoMenu className="text-2xl text-textBase" />
      </div>
    );
  }

  return (
    <>
      <div
        className="w-full flex justify-end items-center md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}>
        <IoMenu className="text-2xl text-textBase cursor-pointer" />
      </div>
      <ul className="fixed top-14 right-4 px-10 gap-4 bg-[#1d1e25] text-normal font-semibold text-zinc-400 p-4 rounded-2xl flex flex-col md:hidden items-center">
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
            <LogoutButton />
        )}
      </ul>
    </>
  );
};
export default MenuNav;
