import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import Header from '../components/Header';
import Projects from '../assets/projectData';
import ProjectGrid from '../components/ProjectGrid';
import '../App.css';

function Home() {
  const { theme } = useContext(ThemeContext);

  const projectList = Projects;

  return (
    <div className={theme}>
      <Header />

      <section id='portfolio' className={`pt-16 pb-32 ${theme}`}>
        <h1 className='text-4xl font-serif font-semibold mb-4 text-center'>
          My projects
        </h1>

        <p className={`text-center leading-tight ${theme}-text-secondary`}>
          Below are some of my projects.
          <br />
          Click on any of them to find out more, or click on the GitHub icon for
          the source code.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-12'>
          {projectList.map((project, index) => (
            <ProjectGrid key={index} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
