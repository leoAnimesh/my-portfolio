import React, { FC } from 'react'
import { FiCalendar, FiPackage } from 'react-icons/fi'
import Link from 'next/link'

type Tech = {
    name: string
    icon: string
}

interface ProjectProps {
    name: string
    liveUrl: string
    description: string
    type: string
    companyName: string
    year: number
    techUsed: Tech[]
}

interface ProjectCardProps {
    project: ProjectProps
}

const ProjectDetailUrl = (projectName: string, from: string): string => `/projects/${projectName.trim().split(' ').join('-')}?from=${from}`

const Pinned: FC<ProjectCardProps> = ({ project }) => {

    return (
        <div className="px-4 py-4 flex flex-col border border-borderDark gap-2">
            <div className="flex items-center gap-2">
                <Link href={ProjectDetailUrl(project.name, "home")} passHref={true} >
                    <h2 className="text-themeBlue text-sm lg:text-md font-semibold">
                        {project.name}
                    </h2>
                </Link>
                <i className="ci ci-spotify ci-2x"></i>
            </div>
            <p className="text-xs lg:text-sm leading-6">
                {project.description}
            </p>
            <div className="flex gap-2 flex-wrap my-2">
                {project.techUsed.map((tech, index) => (
                    <img key={index} className='w-5 h-5 object-contain' src={tech.icon} />
                ))}
            </div>
        </div>
    )
}

const Main: FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="px-4 py-4 flex flex-col border-b border-borderDark gap-2">
            <div>
            </div>
            <div className="flex items-center gap-2">
                <Link href={ProjectDetailUrl(project.name, "projects")} passHref={true} >
                    <h2 className="text-themeBlue text-lg font-semibold">
                        {project.name}
                    </h2>
                </Link>
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
                        className={`bg-darkBlue  hover:bg-themeBlue
                  }  px-3 py-1 rounded-full`}
                    >
                        <p className="capitalize text-xs">{tech.name}</p>
                    </button>
                ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                    <FiCalendar className="text-sm" /> Year : {project.year}
                    <FiPackage className="text-sm" /> Type : {project.type}{' '}
                    project
                </div>
            </div>
        </div>
    )
}

export default {
    Main,
    Pinned
}