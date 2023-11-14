'use client';
import { Divider } from '@/app/components';
import React from 'react';
import { FiCalendar, FiMessageCircle, FiPackage } from 'react-icons/fi';
import { useState } from 'react';

const PROJECTS_DATA = {
  title: 'projects.md',
};

const PROJECTS_TYPES = ['All', 'Company', 'Personal', 'Freelance'];

const PROJECTS = [
  {
    name: 'PhotoShoot Booking Application',
    links: [{ type: 'web', name: 'tricy', url: 'https://tricy.app' }],
    liveUrl: 'https://tricy.app',
    description:
      'Repudiandae nesciunt ut minus qui temporibus. Repudiandae nesciunt ut minus qui temporibus.',
    type: PROJECTS_TYPES[1],
    companyName: 'Tricy',
    year: 2022,
    applicationType: 'web',
    techUsed: ['React', 'Node JS', 'Firebase', 'Sass'],
  },
  {
    name: 'Food Delivery Application',
    liveUrl: 'https://tricy.app',
    links: [{ type: 'android', url: 'https://tricy.app' }],
    description:
      'Repudiandae nesciunt ut minus qui temporibus. Repudiandae nesciunt ut minus qui temporibus.',
    type: PROJECTS_TYPES[1],
    companyName: 'Eatlots',
    year: 2022,
    applicationType: 'web',
    techUsed: ['React', 'Node JS', 'Firebase', 'Sass'],
  },
];

const Projects = () => {
  const [activeProjectType, setActiveProjectType] = useState(PROJECTS_TYPES[0]);
  return (
    <div>
      <section className="flex justify-between py-3 px-4 items-center dark:bg-darkHeader bg-lightHeader rounded-t-md ">
        <p className="text-gray-500 text-base">{PROJECTS_DATA.title}</p>
        <button className="bg-green-700 hover:bg-green-600 flex items-center gap-3 text-white px-3 py-2 text-xs rounded-md">
          <FiMessageCircle /> Let's Connect
        </button>
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
        {PROJECTS.map((project) => (
          <section>
            <div className="px-4 py-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <a href={project.liveUrl} target="_blank">
                  <h2 className="text-themeBlue text-lg font-semibold">
                    {project.name}
                  </h2>
                </a>
                <span className="text-xs border dark:border-borderDark py-1 px-2 rounded-full">
                  {project.companyName}
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-6">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap my-2">
                {project.techUsed.map((tech, index) => (
                  <button
                    key={index}
                    className={`bg-darkBlue hover:bg-themeBlue
                  }  px-3 py-1 rounded-full`}
                  >
                    <p className="capitalize text-xs">{tech}</p>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FiCalendar classname="text-sm" /> Year : {project.year}
                  <FiPackage classname="text-sm" /> Type : {project.type}{' '}
                  project
                </div>
              </div>
            </div>
            <Divider />
          </section>
        ))}
      </section>
    </div>
  );
};

export default Projects;
