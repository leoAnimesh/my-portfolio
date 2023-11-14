'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  FiBookOpen,
  FiBox,
  FiBriefcase,
  FiGlobe,
  FiMessageCircle,
  FiMoon,
  FiSun,
} from 'react-icons/fi';
import { Divider } from '..';
import ThemeSwitcher from './ThemeSwitcher';

const NavLinks = [
  {
    name: 'Overview',
    link: '/',
    icon: <FiBookOpen className="dark:text-white md:text-xl" />,
  },
  {
    name: 'Projects',
    link: '/projects',
    icon: <FiBox className="dark:text-white md:text-xl" />,
  },
  {
    name: 'Experience',
    link: '/experience',
    icon: <FiBriefcase className="dark:text-white md:text-xl " />,
  },
  {
    name: 'Blogs',
    link: '/blogs',
    icon: <FiGlobe className="dark:text-white md:text-xl" />,
  },
];

const Navbar = () => {
  const pathName = usePathname();

  const dynamicStyles = {
    linkTagStyles(link: string) {
      const style = 'flex items-center gap-2 py-3 px-2 border-b';
      return pathName === link
        ? `${style} border-orange`
        : `${style} border-transparent`;
    },
    linkTagTextStyle(link: string) {
      const style = 'text-sm md:text-base md:block ';
      return pathName === link ? `${style} block` : `${style} hidden`;
    },
  };

  return (
    <nav className="dark:bg-darkHeader bg-lightHeader">
      {/* header  */}
      <section className="lg:container lg:mx-auto flex items-center justify-between py-4 px-5 lg:px-0 ">
        {/* left container  */}
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-white border  w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] dark:bg-white flex justify-center items-center">
            <h1 className="font-semibold lg:text-2xl text-xl dark:text-dark ">
              A
            </h1>
          </div>
          <h1 className="lg:text-xl text-lg font-semibold  ">Animesh.dev</h1>
        </div>
        {/* left container  */}
        <div className="flex gap-3">
          <ThemeSwitcher />
        </div>
      </section>
      <Divider />
      {/* navigation section  */}
      <section className="lg:container lg:mx-auto flex gap-4 px-5 lg:px-0">
        {NavLinks.map((data, index) => (
          <Link
            href={data.link}
            key={index}
            className={dynamicStyles.linkTagStyles(data.link)}
          >
            {data.icon}
            <h2 className={dynamicStyles.linkTagTextStyle(data.link)}>
              {data.name}
            </h2>
          </Link>
        ))}
      </section>
      <Divider />
    </nav>
  );
};

export default Navbar;
