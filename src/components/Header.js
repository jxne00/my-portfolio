import React from 'react';
import {
  GitHub,
  LinkedIn,
  DarkMode,
  LightMode,
  Email,
} from '@mui/icons-material';

import { useTheme } from '../theme/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  // icon that links to href
  const SocialLink = ({ href, label, icon }) => (
    <a href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
      <div className='hover:scale-125 transition-transform duration-300 cursor-pointer'>
        {icon}
      </div>
    </a>
  );

  // props for theme icon
  const themeIconProps = {
    className:
      'hover:scale-125 transition-transform duration-300 cursor-pointer',
    onClick: toggleTheme,
  };

  // icon that toggles the theme
  const themeIcon =
    theme === 'dark' ? (
      <LightMode {...themeIconProps} style={{ color: '#fb923c' }} />
    ) : (
      <DarkMode {...themeIconProps} style={{ color: '#1e40af' }} />
    );

  return (
    <header
      className={`fixed ${theme} absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10`}>
      <div className='flex items-center space-x-4'>
        {/* Github */}
        <SocialLink
          href='https://github.com/jxne00'
          label='GitHub'
          icon={<GitHub />}
        />

        {/* LinkedIn */}
        <SocialLink
          href='https://linkedin.com/in/jxne'
          label='LinkedIn'
          icon={<LinkedIn />}
        />

        {/* Email */}
        <SocialLink
          href='mailto:june.pangg@gmail.com'
          label='Email'
          icon={<Email />}
        />
      </div>

      {/* button to toggle theme */}
      {themeIcon}
    </header>
  );
};

export default Header;
