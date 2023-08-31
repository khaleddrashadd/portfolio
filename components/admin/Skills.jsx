'use client';
import useSWR from 'swr';
import { Card, Heading, Content } from '.';

const Skills = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: skills, error,mutate } = useSWR('/api/skills', fetcher);
  return (
    <Card>
      <Heading title="Current Skills" />
      {skills?.map((skill) => (
        <Content
          key={skill.id}
          title={skill.title}
          description={skill.description}
          id={skill.id}
          routeName="skills"
          mutate={mutate}
        />
      ))}
    </Card>
  );
};
export default Skills;
