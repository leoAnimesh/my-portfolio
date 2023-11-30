import React from 'react';
import { FiBriefcase, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import Divider from './Divider';

const details = {
  name: 'Animesh Mondal',
  description: ` Frontend Developer - React | React Native | Ex-Amazon @Intern`,
  list: [
    {
      value: 'Frontend Developer',
      type: 'Job title',
      icon: <FiBriefcase className="dark:text-white" />,
    },
    {
      value: 'India',
      type: 'Location',
      icon: <FiMapPin className="dark:text-white" />,
    },
  ],
};

const SocialLinks = [
  {
    name: 'Github',
    link: 'https://github.com/leoAnimesh',
    icon: <FiGithub className="text-white" />
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/leoanimesh/',
    icon: <FiLinkedin className="text-white" />
  }
]

const SideBar = () => {
  return (
    <div className="lg:w-[20%] w-full h-fit px-5 lg:px-0 flex-col gap-5">
      {/* image  */}
      <div className='flex flex-row lg:flex-col gap-3 '>
        <div className="lg:w-full border dark:border-borderDark rounded-md ">
          <img
            src="/profile.png"
            alt="profile"
            className="object-cover lg:w-full w-[200px] h-full lg:h-auto rounded-md"
          />
        </div>
        <div className="flex flex-col gap-5">
          {/* name and bio  */}
          <div className="flex flex-col gap-2">
            <h1 className="text-lg md:text-xl font-semibold">{details.name}</h1>
            <p className="text-xs md:text-sm ">{details.description}</p>
          </div>

          {/* checkout resume btn */}
          <button className="dark:bg-darkCard dark:border-0 border bg-lightCard w-full text-sm md:text-base py-2 rounded-md ">
            Checkout Resume
          </button>

          {/* other details */}
          <div className="flex flex-col gap-2">
            {details.list.map((item, index) => (
              <div key={index} className="flex items-center gap-3 ">
                <div>{item.icon}</div>
                <p className="text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider className='my-3 border-borderDark' />

      {/* social links */}
      <div className='flex gap-3'>
        {SocialLinks.map((item, index) => (
          <button className='inline-flex items-center gap-2 text-sm underline-offset-4 underline'> {item.icon} {item.name} </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
