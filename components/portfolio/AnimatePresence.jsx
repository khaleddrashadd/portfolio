'use client'
import { AnimatePresence } from 'framer-motion';

const Animate = ({ children }) => {
  return <AnimatePresence initial={false}>{children}</AnimatePresence>;
};
export default Animate;
