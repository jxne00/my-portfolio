import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import sunIcon from '../assets/images/moon-6694.svg';
import moonIcon from '../assets/images/moon-2287.svg';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10'>
      <span
        className={`italic font-bold text-lg ${
          theme === 'dark' ? 'text-slate-400' : 'text-blue-800'
        }`}>
        June's Portfolio
      </span>

      {/* change the theme */}
      <div className='flex items-center' onClick={toggleTheme}>
        {theme === 'light' ? (
          <img src={moonIcon} className='w-5 h-5' alt='moon icon' />
        ) : (
          <img src={sunIcon} className='w-5 h-5' alt='sun icon' />
        )}
      </div>
    </header>
  );
}

export default Header;
