import { Divider } from '@/app/components';
import { FiMessageCircle } from 'react-icons/fi';

const HOME_DATA = {
  title: 'overview.md',
  greet: `Hi 👋 I’m Animesh Mondal`,
  description: `I'm a passionate Software Developer With a strong knowledge base in frontend development, I have gained valuable experience through a diverse range of professional opportunities. I thrive on using my coding skills to solve real-world problems, and I'm always eager to tackle new challenges.`,
  introList: [
    '🌱 I’m currently learning Everything related to Javascript',
    '💬 Ask me about React,React Native,Javascript',
  ],
  socialBadges: [
    {
      image:
        'https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white',
      link: 'https://linkedin.com/in/leoanimesh',
      keyword: 'linkedin',
    },
    {
      image:
        'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
      link: 'https://github.com/leoanimesh',
      keyword: 'github',
    },
    {
      image:
        'https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white',
      link: 'https://medium.com/@leoanimesh',
      keyword: 'medium',
    },
  ],
  techSkills: [
    {
      image:
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      keyword: 'html5',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      image:
        'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      keyword: 'css3',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      keyword: 'sass',
      image:
        'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
      link: 'https://sass-lang.com/',
    },
    {
      image:
        'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      keyword: 'javascript',
    },
    {
      image:
        'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      link: 'https://react.dev',
      keyword: 'react',
    },
    {
      link: 'https://reactrouter.com/',
      image:
        'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
      keyword: 'react-router',
    },
    {
      image:
        'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white',
      keyword: 'redux',
      link: 'https://redux.js.org/',
    },
    {
      image:
        'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      link: 'https://reactnative.dev',
      keyword: 'react-native',
    },
    {
      keyword: 'nextjs',
      image:
        'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
      link: 'https://nextjs.org/',
    },
    {
      keyword: 'tailwindcss',
      image:
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
      link: 'https://tailwindcss.com/',
    },
    {
      image:
        'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      link: 'https://www.typescriptlang.org/',
      keyword: 'typescript',
    },
    {
      keyword: 'nodejs',
      image:
        'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
      link: 'https://nodejs.org/en/',
    },
    {
      keyword: 'expressjs',
      image:
        'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge',
      link: 'https://expressjs.com/',
    },
    {
      keyword: 'mongodb',
      image:
        'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
      link: 'https://www.mongodb.com/',
    },
    {
      keyword: 'firebase',
      image:
        'https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black',
      link: 'https://firebase.google.com/',
    },
    {
      keyword: 'git',
      image:
        'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      link: 'https://git-scm.com/',
    },
    {
      keyword: 'docker',
      image:
        'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
      link: 'https://www.docker.com/',
    },
  ],
};

const Home = () => {
  return (
    <div>
      {/* header  */}
      <section className="flex justify-between py-3 px-4 items-center dark:bg-darkHeader bg-lightHeader rounded-t-md ">
        <p className="text-gray-500 text-base">{HOME_DATA.title}</p>
        <button className="bg-green-700 hover:bg-green-600 flex items-center gap-3 text-white px-3 py-2 text-xs rounded-md">
          <FiMessageCircle /> Let's Connect
        </button>
      </section>
      <Divider />

      <section className="w-full my-6">
        <h1 className="text-center font-medium">{HOME_DATA.greet}</h1>
      </section>
      <Divider />

      <section className="px-6 py-4">
        <p className="md:text-sm text-xs font-normal leading-6 ">
          {HOME_DATA.description}
        </p>
        <br />
        <ul>
          {HOME_DATA.introList.map((data, index) => (
            <li className="md:text-sm text-xs font-normal mb-2" key={index}>
              {'-> '} {data}
            </li>
          ))}
        </ul>
      </section>
      <Divider />

      {/* connect links  */}
      <section className="px-6 py-4">
        <h1 className="font-semibold mb-3">Connect with me</h1>
        <div className="flex gap-3">
          {HOME_DATA.socialBadges.map((data, index) => (
            <a key={index} href={data.link} target="_blank">
              <img
                src={data.image}
                alt={data.keyword}
                key={index}
                className="border rounded border-lightCard  dark:border-darkCard"
              />
            </a>
          ))}
        </div>
      </section>
      <Divider />

      {/* Skills section  */}
      <section className="px-6 py-4">
        <div className="mb-4 ">
          <h1 className="font-semibold">Techical Skills</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          {HOME_DATA.techSkills.map((data, index) => (
            <a key={index} href={data.link} target="_blank">
              <img
                src={data.image}
                alt={data.keyword}
                key={index}
                className="border rounded border-lightCard  dark:border-darkCard"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
