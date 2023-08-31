import { Projects, ProjectsInput } from '@/components/admin';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-8 text-white mt-10">
      <ProjectsInput />
      <Projects />
    </div>
  );
};
export default ProjectsPage;
