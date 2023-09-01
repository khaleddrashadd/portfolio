'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { routes } from '@/data/portfolio/routes';
import { navbarMenuVariant } from '@/lib/framer-motion/variants';

const MenuNav = ({ cv }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        whileTap={{ scale: 0.6 }}
        key="menu"
        className="block md:hidden  ml-auto cursor-pointer"
        onClick={() => setIsActive((prev) => !prev)}>
        <IoMenu className="text-2xl text-textBase " />
      </motion.div>
      {isActive && (
        <motion.div
          initial="closed"
          animate="open"
          exit="exit"
          key="menuNav"
          variants={navbarMenuVariant}
          className="p-4 w-275 bg-[#1d1e25] rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer transition"
              onClick={() => setIsActive(false)}>
              {route.label}
            </Link>
          ))}
          <Link
            href={cv}
            download="Khaled Rashad Resume"
            target="_blank"
            rel="noreferrer"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 transition"
            onClick={() => setIsActive(false)}>
            Download CV
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MenuNav;
