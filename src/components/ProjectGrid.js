import React, { useContext, useState } from 'react';
import { GitHub, ArticleOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../App.css';

import { ThemeContext } from '../theme/ThemeContext';
import DetailsModal from './DetailsModal';

function ProjectGrid({ project }) {
  const { theme } = useContext(ThemeContext);
  const { title, overview, imgpath, tags, repoURL, description, html_link } =
    project;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // determine if project has "detail" page or "html_link"
  const hasDetailPage = description;
  const hasHTMLLink = html_link;

  // ref to check if grid is in view
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  // animation variants
  const variants = {
    hiddenTop: {
      opacity: 0,
      y: window.innerWidth <= 768 ? '-50px' : '-100px',
    },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`grid-${theme} flex-1 p-5 shadow-md flex flex-col transition-transform neon-box`}>
      <motion.div
        ref={ref}
        animate={inView ? 'visible' : 'hiddenTop'}
        variants={variants}
        transition={{ duration: 0.5 }}>
        <img
          src={imgpath}
          alt={`${title} preview`}
          className='mb-4 h-48 object-cover mx-auto'
        />
      </motion.div>

      <h2 className='text-2xl font-semibold mb-3'>{title}</h2>

      <p className='mb-4 leading-tight'>{overview}</p>

      <div className='justify-between mt-auto'>
        {/* project tags & link to repo */}
        <div className='flex items-center mb-3'>
          <div className='flex space-x-2'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='inline-block text-sm text-white font-semibold bg-slate-500 rounded shadow-sm px-3'>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-3 justify-end'>
          {/* link to repo */}
          <GitHub
            className='cursor-pointer transform transition hover:scale-110'
            fontSize='large'
            onClick={() => window.open(repoURL, '_blank')}
          />

          {/* modal to see more details */}
          {hasDetailPage && (
            <>
              <button
                onClick={handleOpen}
                className='bg-gradient-to-r from-violet-700 to-blue-700 hover:from-violet-500 hover:to-blue-500 rounded text-white font-semibold px-5 py-2 shadow-md transform transition hover:scale-105'>
                Details
              </button>
              <DetailsModal
                project={project}
                open={open}
                handleClose={handleClose}
              />
            </>
          )}

          {/* link to html page */}
          {hasHTMLLink && (
            <button
              onClick={() => window.open(html_link, '_blank')}
              className='bg-blue-900 hover:bg-blue-600 rounded text-white font-semibold px-5 py-2 shadow-md transform transition hover:scale-105'>
              <ArticleOutlined />
              &nbsp;Read
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
