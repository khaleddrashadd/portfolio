'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io';
import useSWR from 'swr';

const Projects = () => {
    const fetcher = (url) =>
      fetch(url, { cache: 'no-store' }).then((res) => res.json());
    const { data } = useSWR('/api/projects', fetcher);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 my-24"
      id="projects">
      {data?.map((item) => (
        <motion.div
          key={item.id}
          className="border flex flex-col gap-4 border-zinc-800 rounded-md p-2 hover:border-zinc-600 duration-100 ease-in-out">
          <Link href={item.url}>
            <p className="text-lg text-textBase font-medium uppercase">
              {item.name.length > 25
                ? `${item.name.slice(0, 25)}...`
                : item.name}
            </p>
            <div className="w-full relative aspect-square object-cover rounded-md my-4">
              <Image
                src={item?.imgUrl}
                alt="project image"
                fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <p className="text-lg text-gray-300">
                Technologies
                <span className="block text-sm text-gray-500">
                  {item.description}
                </span>
              </p>
              <motion.div whileTap={{ scale: 0.5 }}>
                <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
              </motion.div>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
export default Projects;
