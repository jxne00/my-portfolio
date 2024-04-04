import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import ProjectSection from './components/Projects';

function App() {
  // scrolls from cover page to projects section
  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    projectsElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <Header />
      <Home scrollToProjects={scrollToProjects} />
      <ProjectSection />
    </ThemeProvider>
  );
}

export default App;
