import {
  Bio,
  Skills,
  Navbar,
  Projects,
  SocialMedia,
} from '@/components/portfolio';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="w-[80%] mt-4">
        <Bio />
        <Skills />
        <Projects />
        <SocialMedia />
      </main>
    </>
  );
};
export default HomePage;
