import { getUserData } from '@/actions/getUserData';
import {
  Bio,
  Experience,
  Navbar,
  Projects,
  SocialMedia,
} from '@/components/portfolio';

const HomePage = async () => {
  const userData = await getUserData();
  const social = {
    whatsapp: userData?.socialMedia.whatsapp,
    linkedin: userData?.socialMedia.linkedin,
    github: userData?.socialMedia.github,
    facebook: userData?.socialMedia.facebook,
    x: userData?.socialMedia.x,
    email: userData?.email,
  };
  return (
    <>
      <Navbar
      />
      <main className="w-[80%] mt-4">
        <Bio />
        <Experience />
        <Projects />
        <SocialMedia social={social} />
      </main>
    </>
  );
};
export default HomePage;
