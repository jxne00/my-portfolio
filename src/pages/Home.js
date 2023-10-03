import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import Header from '../components/Header';
import Projects from '../assets/projectData';
import ProjectGrid from '../components/ProjectGrid';
import '../App.css';

function Home() {
  const { theme } = useContext(ThemeContext);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    setProjectList(Projects);
  }, []);

  return (
    <div className={theme}>
      <Header />

      <section id='portfolio' className={`${theme} pt-16 pb-32`}>
        <h1 className='text-4xl font-semibold mb-2 text-center'>My projects</h1>

        <p className={`text-center leading-tight ${theme}-text-secondary`}>
          Below are some of the projects I have worked on.
          <br />
          Click on any of them to find out more!
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-12'>
          {projectList.map((project, index) => ProjectGrid({ project, index }))}
        </div>
      </section>
    </div>
  );
}

export default Home;
