import { getUserData } from '@/actions/getUserData';
import {
  Bio,
  Experience,
  Navbar,
  Projects,
  SocialMedia,
  SplineModel,
} from '@/components/portfolio';

const HomePage = async () => {
  const userData = await getUserData();
  const bioData = {
    bio: userData?.bio,
    cv: userData?.cv,
    img: userData?.imgUrl,
  };
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
        cv={userData?.cv}
        name={userData?.name}
      />
      {/* <SplineModel /> */}
      <main className="w-[80%] mt-4">
        <Bio data={bioData} />
        <Experience skills={userData?.skills} />
        <Projects projects={userData?.projects} />
        <SocialMedia social={social} />
      </main>
    </>
  );
};
export default HomePage;
