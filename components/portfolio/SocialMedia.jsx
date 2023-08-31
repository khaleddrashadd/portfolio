'use client';

import { motion } from 'framer-motion';
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from 'react-icons/io';

const SocialMedia = ({social}) => {
  const socialLinks = [
    {
      id: 1,
      iconSrc: (
        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
      ),
      name: 'GitHub',
      link: social.github,
    },
    {
      id: 2,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: 'Twitter',
      link: social.x,
    },
    {
      id: 3,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: 'LinkedIn',
      link: social.linkedin,
    },
    {
      id: 4,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: 'Whatsapp',
      link:`tel:${social.whatsapp}`,
    },
  ];

  return (
    <section
      id="contacts"
      className="flex flex-col items-center justify-evenly w-full my-24">
      <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
      <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
        {socialLinks?.map((item) => (
          <motion.a
            whileTap={{ scale: 0.8 }}
            href={item.link}
            key={item.id}
            target='_blank'
            className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
            {item.iconSrc}
            <p className="text-lg text-textBase">{item.name}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
export default SocialMedia;
