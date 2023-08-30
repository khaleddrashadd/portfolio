'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { routes } from '@/data/portfolio/routes';
import { navbarMenuVariant } from '@/lib/framer-motion/variants';

const MenuNav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.6 }}
        className="block md:hidden  ml-auto cursor-pointer"
        onClick={() => setIsActive((prev) => !prev)}>
        <IoMenu className="text-2xl text-textBase " />
      </motion.div>
      {isActive && (
        <motion.div
          initial="closed"
          animate="open"
          exit="exit"
          variants={navbarMenuVariant}
          className="p-4 w-275 bg-[#1d1e25] rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
          {routes.map((route) => (
            <a
              key={route.label}
              href={route.href}
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer transition"
              onClick={() => setIsActive(false)}>
              {route.label}
            </a>
          ))}
          <a
            href="#"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 transition"
            onClick={() => setIsActive(false)}>
            Download CV
          </a>
        </motion.div>
      )}
    </>
  );
};
export default MenuNav;
