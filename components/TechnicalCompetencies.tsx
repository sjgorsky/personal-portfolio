import { ReactElement } from 'react';
import Image from 'next/image';

interface TechIcon {
  name: string;
  icon: ReactElement;
}

const technologies: TechIcon[] = [
  {
    name: 'Ruby',
    icon: (
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo_64x64.png"
        alt="Ruby Logo"
        width={64}
        height={64}
        className="w-16 h-16"
      />
    ),
  },
  {
    name: 'Ruby on Rails',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 411 155" className="w-16 h-16">
        <title>Ruby on Rails Logo</title>
        <g>
          <path
            fill="#d30001"
            d="M242.3 76.8h-19.5c-13.9 0-18.6 12.6-18.6 18.6v52.2h19.5v-12.5H242v12.5h18.9V95.4c0-15.2-13.8-18.6-18.6-18.6Zm-.4 38.1h-18.3V97.6s0-3.9 6.1-3.9h6.7c5.4 0 5.5 3.9 5.5 3.9v17.3Z"
          />
          <path
            fill="#d30001"
            d="M194.9 101c0-22.6-21.2-24.7-21.2-24.7h-38.2v71.3h19.2v-17.2l16.6 17.2h28.4l-22.3-22.5s17.5-1.5 17.5-24.1Zm-24.9 9.5h-15.3V94.2h15.4s4.3 1.6 4.3 8.1-4.4 8.2-4.4 8.2Z"
          />
          <path
            fill="#d30001"
            d="M379.374 120.643c.333.002.446.002 0 0Z"
          />
          <path
            fill="#d30001"
            d="M385.3 103.4H369V95h32.3V76.8h-31c-8 0-18.7 6.6-18.7 18.9v6.3c0 12.3 10.6 18.6 18.7 18.6 5.868.026 8.304.039 9.074.043-1.298-.008-5.906-.043 6.326-.043v8.8l-33.1.1v18.1h32.7c6.7 0 18.2-4.9 18.6-18.6v-7c0-11.7-9.6-18.6-18.6-18.6Z"
          />
          <path
            fill="#d30001"
            d="M269.8 76.8h20.3v70.8h-20.3z"
          />
          <path
            fill="#d30001"
            d="M318.6 76.8h-20.2v70.8h47.5v-18.3h-27.3V76.8z"
          />
        </g>
        <g>
          <path
            fill="#d30001"
            d="M180 17.8c-.9-.5-3.4-1.7-9.7-3.5l-.4 6.6c3.3 1.1 6.5 2.3 9.7 3.6l.4-6.7Z"
          />
          <path
            fill="#d30001"
            d="M124.9 18.9c-29.2 2.6-65 29.1-86 64.1S15 147.6 15 147.6h79s-15.1-68.9 34.9-96.8c10.9-5.3 45.6-25.1 102.4 16.9 1.8-1.5 3.5-2.7 3.5-2.7s-52-51.9-109.9-46.1Z"
          />
          <path
            fill="#d30001"
            d="m54.7 54.7-7.1-6.2c-2.6 2.5-5.1 5-7.4 7.5l7.7 6.6c2.1-2.7 4.4-5.4 6.8-7.9Z"
          />
          <path
            fill="#d30001"
            d="M92.5 25 88 18.1c-2.5 1.3-5.1 2.7-7.8 4.3l4.6 7c2.6-1.6 5.1-3.1 7.7-4.4Z"
          />
          <path
            fill="#d30001"
            d="M24.5 99.4 13 95.2c-1.9 4.3-4 9.3-5 12l11.5 4.2c1.3-3.4 3.4-8.3 5-12Z"
          />
          <path
            fill="#d30001"
            d="M133.1 14.5h1l-2-6.1c-3.1 0-6.3.2-9.6.6l1.9 5.9c2.9-.3 5.8-.4 8.7-.4Z"
          />
          <path
            fill="#d30001"
            d="M97 127.6c.2 5.3.7 9.6 1.2 12.6l12 4.3c-.9-3.9-1.8-8.3-2.4-13L97 127.6Z"
          />
          <path
            fill="#d30001"
            d="m137.9 51.3 2.3 6.9c2.9-1.4 5.8-2.6 8.7-3.5l-2.2-6.6c-3.4 1-6.3 2.1-8.8 3.2Z"
          />
          <path
            fill="#d30001"
            d="M169.7 52c3.3.1 6.6.5 9.9 1.2l.4-6.2c-3.4-.7-6.7-1.1-9.9-1.3l-.4 6.3Z"
          />
          <path
            fill="#d30001"
            d="M101.5 91.2c-1.3 3.7-2.2 7.4-3 11l8.1 6.4c.4-3.9 1.1-7.8 2.1-11.7l-7.2-5.7Z"
          />
          <path
            fill="#d30001"
            d="m113 70 4.8 7.2c1.7-2.5 3.7-4.8 5.9-7.1l-4.5-6.8c-2.3 2.1-4.4 4.4-6.2 6.7Z"
          />
        </g>
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16">
        <title>React Logo</title>
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 33" className="w-16 h-16">
        <title>Tailwind CSS Logo</title>
        <g clipPath="url(#prefix__clip0)">
          <path
            fill="#38bdf8"
            fillRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0">
            <path fill="#fff" d="M0 0h54v32.4H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Pg_logo.png"
        alt="PostgreSQL Logo"
        width={260}
        height={260}
        className="w-16 h-16"
      />
    ),
  },
  {
    name: 'React Native',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16">
        <title>React Native Logo</title>
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Redux',
    icon: (
      <Image
        src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
        alt="Redux Logo"
        width={64}
        height={64}
        className="w-16 h-16"
      />
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <Image
        src="https://www.clipartmax.com/png/middle/87-879058_formation-node-js-node-js-logo-vector.png"
        alt="Node.js Logo"
        width={64}
        height={64}
        className="w-16 h-16"
      />
    ),
  },
];

export default function TechnicalCompetencies() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Technologies
        </h2>
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
            {technologies.slice(0, 5).map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
          {technologies.length > 5 && (
            <div className="flex flex-wrap justify-center gap-8">
              {technologies.slice(5).map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}