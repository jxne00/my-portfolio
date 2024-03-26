import React from 'react';
import { ExpandMore, LaunchOutlined } from '@mui/icons-material';
import { useTheme } from '../theme/ThemeContext';
import myresume from '../assets/pdf/my_resume.pdf';

const Home = ({ scrollToProjects }) => {
  const { theme } = useTheme();

  // set diff text gradients based on theme
  const gradient =
    theme === 'dark'
      ? 'bg-gradient-to-r from-fuchsia-400 to-rose-400'
      : 'bg-gradient-to-r from-fuchsia-800 to-rose-800';

  return (
    <div className={`${theme} min-h-screen`}>
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-10">
          <span className="italic font-bold text-4xl">
            Hi! I am{' '}
            <span className={`${gradient} bg-clip-text text-transparent`}>June</span>
          </span>

          <button
            onClick={() => window.open(myresume, '_blank')}
            className="bg-purple-800 hover:bg-purple-900 rounded-md text-white font-semibold px-3 py-2 shadow-md transform transition hover:scale-105">
            <LaunchOutlined /> Resume
          </button>
        </div>

        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={scrollToProjects}>
          <span className={`${theme}-text-secondary`}>Projects</span>
          <ExpandMore fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Home;
