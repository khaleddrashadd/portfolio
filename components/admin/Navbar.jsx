'use client';
import Link from 'next/link';
import { LogoutButton, MainNav, MenuNav } from '.';

const Navbar = ({ user }) => {
  return (
    <header>
      <nav className="w-full flex items-center justify-center">
        <div className="sticky w-full inset-x-0 top-2 flex items-center justify-between">
          <MainNav user={user} />
          <MenuNav user={user} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
