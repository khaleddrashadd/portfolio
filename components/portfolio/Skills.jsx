'use client';
import 'react-vertical-timeline-component/style.min.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoVuejs, BiLogoJavascript } from 'react-icons/bi';
import { DiSass } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { IoCodeWorking } from 'react-icons/io5';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Skeleton from 'react-loading-skeleton';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import useSWR from 'swr';

const Skills = () => {
  const fetcher = (url) =>
    fetch(url, { cache: 'no-store' }).then((res) => res.json());
  const { data, isLoading } = useSWR('/api/skills', fetcher);

  if (isLoading) {
    return (
      <section className="w-full flex items-center justify-center">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="react-vertical-timeline-component"
            contentStyle={{
              background: 'rgb(21, 24, 31)',
              color: '#888',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(21, 24, 31)',
            }}
            date="then - present"
            iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
            icon={<FaReact />}>
            <Skeleton className="text-lg text-textBase font-medium uppercase" />
            <Skeleton className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl" />
            <Skeleton className="text-lg text-gray-300" />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    );
  }

  const skillsIcons = {
    React: <FaReact color="#61DAFB" />,
    Next: <SiNextdotjs color="#ffff" />,
    Javascript: <BiLogoJavascript color="#F7DF1E" />,
    Css: <BiLogoCss3 color="#264de4" />,
    'Css Frameworks': <SiTailwindcss color="#61DAFB" />,
    Html: <AiFillHtml5 color="#E34F26" />,
    Vue: <BiLogoVuejs color="#4FC08D" />,
    Sass: <DiSass color="#CC6699" />,
    TypeScript: <SiTypescript color="#007ACC" />,
  };

  const skills = data?.map((item) => {
    return skillsIcons[item.title]
      ? {
          ...item,
          iconsSrc: skillsIcons[item.title],
          date: item.dateRange,
        }
      : {
          ...item,
          iconsSrc: <IoCodeWorking />,
          date: item.dateRange,
        };
  });

  return (
    <section className="w-full flex items-center justify-center">
      <VerticalTimeline>
        {skills?.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="react-vertical-timeline-component"
            contentStyle={{
              background: 'rgb(21, 24, 31)',
              color: '#888',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(21, 24, 31)',
            }}
            date={item.date}
            iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
            icon={item.iconsSrc}>
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.location}
            </h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Skills;
