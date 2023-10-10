import React from 'react';
import { VerticalAlignTop } from '@mui/icons-material';
import { useTheme } from '../theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className='py-4 px-2'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className={`text-sm ${theme}-text-secondary`}>
          &copy; {new Date().getFullYear()} June Pang.
        </p>

        <VerticalAlignTop
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label='Scroll to top'
          className='bg-gray-500 hover:bg-gray-200 p-2 rounded-full cursor-pointer'
          fontSize='large'
        />
      </div>
    </footer>
  );
};

export default Footer;
