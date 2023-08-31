'use client';
import useSWR from 'swr';
import { Card, Heading, Content } from '.';

const Projects = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: projects, error } = useSWR('/api/projects', fetcher);
  return (
    <Card>
      <Heading title="Current Projects" />
      {projects?.map((project) => (
        <Content
          key={project.id}
          title={project.name}
          description={project.description}
          id={project.id}
          routeName='projects'
        />
      ))}
    </Card>
  );
};
export default Projects;
