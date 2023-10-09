import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import sunIcon from '../assets/images/moon-6694.svg';
import moonIcon from '../assets/images/moon-2287.svg';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // set diff text color based on theme
  const textColor = theme === 'dark' ? 'text-slate-400' : 'text-blue-800';

  // set diff icon based on theme
  const iconType =
    theme === 'light'
      ? { src: moonIcon, alt: 'moon icon' }
      : { src: sunIcon, alt: 'sun icon' };

  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10'>
      <span className={`italic font-bold text-lg ${textColor}`}>
        June's Portfolio
      </span>

      {/* change the theme */}
      <button
        className='flex items-center p-2 focus:outline-none focus:ring'
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
