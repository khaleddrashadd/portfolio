import { getProject } from '@/actions/getProject';
import { ProjectsInput } from '@/components/admin';

const ProjectPage = async ({ params: { projectId } }) => {
  const project = await getProject(projectId);

  return <ProjectsInput data={project} />;
};
export default ProjectPage;
