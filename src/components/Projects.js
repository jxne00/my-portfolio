import React, { useState } from 'react';
import { GitHub } from '@mui/icons-material';
import { useTheme } from '../theme/ThemeContext';

import Projects from '../assets/projectData';
import ProjectGrid from './ProjectGrid';
import Footer from './Footer';

const ProjectSection = () => {
  const { theme } = useTheme();
  const [selected, setSelected] = useState('All');

  const tags = [
    'All',
    'Python',
    'Node.js',
    'React Native',
    'C++',
    'SQL',
    'React',
    'p5js',
    'ASP.NET Core'
  ];

  // filter project list based on chosen tag
  const projectList =
    selected === 'All'
      ? Projects
      : Projects.filter((project) => project.tags.includes(selected));

  return (
    <div id="projects" className={theme}>
      <section id="portfolio" className={`pt-16 pb-32 ${theme}`}>
        <h1 className="text-4xl font-serif font-semibold mb-4 text-center">
          My projects
        </h1>

        <p className={`text-center ${theme}-text-secondary text-lg mb-4`}>
          Below are the projects I have done.
          <br />
          Click on <GitHub fontSize="small" /> for the source code of each project.
        </p>

        {/* filters */}
        <div className="flex justify-center mb-8">
          <div className="flex overflow-x-auto py-2 justify-center">
            {tags.map((tag, index) => (
              <button
                key={index}
                className={`${
                  selected === tag ? 'bg-gray-600' : 'bg-gray-900'
                } hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md mx-2 my-1 transform transition hover:scale-105 focus:outline-none`}
                onClick={() => setSelected(tag)}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* project list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
          {projectList.map((project, index) => (
            <ProjectGrid key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectSection;
