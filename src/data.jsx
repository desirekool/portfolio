import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaJava, FaJira, FaGit } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='inline h-8 w-8 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='skill-icon' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='skill-icon' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='skill-icon' />,
    text: 'Proficiency in Java, developing fullstack applications.',
  },
  {
    id: nanoid(),
    title: 'Jira',
    icon: <FaJira className='skill-icon' />,
    text: 'Proficiency in Jira Ticketing System',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGit className='skill-icon' />,
    text: 'Proficiency in Git, Managing Repositories, and deploying them to deployment.',
  },
];

