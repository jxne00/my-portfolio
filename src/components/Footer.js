import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { Email, ArticleOutlined } from '@mui/icons-material';
import '../App.css';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className='py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className={`text-sm ${theme}-text-secondary`}>
          &copy; {new Date().getFullYear()} June Pang.
        </p>

        <div className='flex items-center'>
          {/* Email */}
          <a href='mailto:june.pangg@gmail.com' className='mr-4'>
            <Email
              sx={{
                color: theme === 'dark' ? '#A5A2B9' : '#242424',
                '&:hover': {
                  // on hover
                  color: theme === 'dark' ? '#414770' : '#5d638f',
                },
              }}
            />
          </a>

          {/* Resume Button */}
          <a
            href='/' // TODO: add resume link
            // target='_blank'
            // rel='noopener noreferrer'
            className={`text-sm ${theme}-text-secondary hover:scale-110 transition-transform duration-300 cursor-pointer px-4 py-2 rounded flex items-center`}>
            <ArticleOutlined fontSize='small' /> Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
