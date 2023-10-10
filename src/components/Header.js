import React, { useContext } from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';

import { ThemeContext } from '../theme/ThemeContext';
import sunIcon from '../assets/images/moon-6694.svg';
import moonIcon from '../assets/images/moon-2287.svg';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // set diff text gradients based on theme
  const gradient =
    theme === 'dark'
      ? 'bg-gradient-to-r from-fuchsia-400 to-rose-400'
      : 'bg-gradient-to-r from-fuchsia-800 to-rose-800';

  // set diff icon based on theme
  const iconType =
    theme === 'light'
      ? { src: moonIcon, alt: 'moon icon' }
      : { src: sunIcon, alt: 'sun icon' };

  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10'>
      <div className='flex items-center space-x-4'>
        <span
          className={`italic font-bold text-lg ${gradient} bg-clip-text text-transparent`}>
          June Pang
        </span>

        {/* Github */}
        <a
          href='https://github.com/jxne00'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'>
          <GitHub className='hover:scale-125 transition-transform duration-300 cursor-pointer' />
        </a>

        {/* LinkedIn */}
        <a
          href='https://linkedin.com/in/jxne'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'>
          <LinkedIn className='hover:scale-125 transition-transform duration-300 cursor-pointer' />
        </a>
      </div>

      {/* change the theme */}
      <button
        className='flex items-center p-2 focus:outline-none'
        onClick={toggleTheme}
        aria-label='Theme toggle button'>
        <img
          src={iconType.src}
          className='w-5 h-5 transform transition-transform duration-300 hover:scale-125'
          alt={iconType.alt}
        />
      </button>
    </header>
  );
}

export default Header;
