import React from 'react';
import { GitHub } from '@mui/icons-material';
import { useTheme } from '../theme/ThemeContext';

import Header from './Header';
import Projects from '../assets/projectData';
import ProjectGrid from './ProjectGrid';
import Footer from './Footer';
import '../App.css';

function Home() {
  const { theme } = useTheme();

  const projectList = Projects;

  return (
    <div className={theme}>
      <Header />

      <section id='portfolio' className={`pt-16 pb-32 ${theme}`}>
        <h1 className='text-4xl font-serif font-semibold mb-4 text-center'>
          My projects
        </h1>

        <p className={`text-center ${theme}-text-secondary`}>
          Below are the projects I have done.
          <br />
          Click on <GitHub /> to view the source code of each project.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-12'>
          {projectList.map((project, index) => (
            <ProjectGrid key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
