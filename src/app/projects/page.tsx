'use client';
import Divider from '@/app/components/shared/Divider';
import React from 'react';
import { FiCalendar, FiPackage } from 'react-icons/fi';
import { useState } from 'react';
import ProjectCard from '../components/shared/ProjectCard';

const PROJECTS_DATA = {
  title: 'projects.md',
};

const PROJECTS_TYPES = ['All', 'web Apps', 'Mobile Apps', 'Desktop Apps'];

const PROJECTS = [
  {
    name: 'PhotoShoot Booking Application',
    links: [{ type: 'web', name: 'tricy', url: 'https://tricy.app' }],
    liveUrl: 'https://tricy.app',
    description:
      'Repudiandae nesciunt ut minus qui temporibus. Repudiandae nesciunt ut minus qui temporibus.',
    type: 'Personal',
    companyName: 'Tricy',
    year: 2022,
    applicationType: 'web',
    techUsed: [{ name: 'React', icon: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" }, { name: 'Node JS', icon: 'https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png' }, { name: 'Firebase', icon: 'https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png' },],
  },
  {
    name: 'Food Delivery Application',
    liveUrl: 'https://tricy.app',
    links: [{ type: 'android', url: 'https://tricy.app' }],
    description:
      'Repudiandae nesciunt ut minus qui temporibus. Repudiandae nesciunt ut minus qui temporibus.',
    type: 'Company',
    companyName: 'Eatlots',
    year: 2022,
    applicationType: 'web',
    techUsed: [{ name: 'React', icon: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" }, { name: 'Node JS', icon: 'https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png' }, { name: 'Firebase', icon: 'https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png' },],
  },
];

const Projects = () => {
  const [activeProjectType, setActiveProjectType] = useState(PROJECTS_TYPES[0]);
  return (
    <div>
      <section className="flex justify-between py-3 px-4 items-center dark:bg-darkHeader bg-lightHeader rounded-t-md ">
        <p className="text-gray-500 text-base">{PROJECTS_DATA.title}</p>
      </section>
      <Divider />

      <section className="flex gap-3 px-4 py-3">
        {PROJECTS_TYPES.map((type) => (
          <button
            onClick={() => setActiveProjectType(type)}
            className={`  ${activeProjectType === type ? 'bg-themeBlue' : 'bg-darkBlue'
              }  px-4 py-1 rounded-full`}
          >
            <p className="capitalize text-sm">{type}</p>
          </button>
        ))}
      </section>
      <Divider />

      <section>
        {PROJECTS.map((project, index) => (
          <ProjectCard.Main project={project} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
