'use client';
import 'react-vertical-timeline-component/style.min.css';
// import { useEffect } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoVuejs, BiLogoJavascript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { IoCodeWorking } from 'react-icons/io5';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import useSWR from 'swr';

const Experience = () => {
  const fetcher = (url) => fetch(url,{cache:"no-store"}).then((res) => res.json());
  const { data } = useSWR('/api/skills', fetcher);
  // useEffect(() => {
  //   mutate();
  // }, [mutate]);

  const experience = [
    {
      id: 1,
      date: '2016 - present',
      iconsSrc: <FaReact />,
      title: 'Creative Director',
      location: 'Doha, Qatar',
      description:
        'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      id: 2,
      date: '2014 - 2016',
      iconsSrc: <SiNextdotjs />,
      title: 'Creative Director',
      location: 'Doha, Qatar',
      description:
        'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      id: 3,
      date: '2012 - 2014',
      iconsSrc: <BiLogoJavascript />,
      title: 'Creative Director',
      location: 'Doha, Qatar',
      description:
        'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      id: 4,
      date: '2011 - 2012',
      iconsSrc: <BiLogoCss3 />,
      title: 'Creative Director',
      location: 'Doha, Qatar',
      description:
        'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      id: 5,
      date: '2011 - 2012',
      iconsSrc: <SiTailwindcss />,
      title: 'Creative Director',
      location: 'Doha, Qatar',
      description:
        'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      id: 6,
      date: '2010 - 2011',
      iconsSrc: <AiFillHtml5 />,
      title: 'Creative Director',
      location: 'Doha, Qatar',
      description:
        'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      id: 7,
      date: '2010 - 2011',
      iconsSrc: <BiLogoVuejs />,
      title: 'Creative Director',
      location: 'Doha, Qatar',
      description:
        'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      id: 8,
      date: '2010 - 2011',
      iconsSrc: <IoCodeWorking />,
      title: 'Creative Director',
      location: 'Doha, Qatar',
      description:
        'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
  ];
  return (
    <section className="w-full flex items-center justify-center">
      <VerticalTimeline>
        {data?.map((item) => (
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
export default Experience;
