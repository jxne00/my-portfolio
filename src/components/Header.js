import React from 'react';
import { GitHub, LinkedIn, DarkMode, LightMode } from '@mui/icons-material';

import { useTheme } from '../theme/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  // set diff text gradients based on theme
  const gradient =
    theme === 'dark'
      ? 'bg-gradient-to-r from-fuchsia-400 to-rose-400'
      : 'bg-gradient-to-r from-fuchsia-800 to-rose-800';

  const themeIconProps = {
    className:
      'hover:scale-125 transition-transform duration-300 cursor-pointer',
    onClick: toggleTheme,
  };

  const themeIcon =
    theme === 'dark' ? (
      <LightMode {...themeIconProps} style={{ color: '#fb923c' }} />
    ) : (
      <DarkMode {...themeIconProps} style={{ color: '#1e40af' }} />
    );

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
      {themeIcon}
    </header>
  );
}

export default Header;
