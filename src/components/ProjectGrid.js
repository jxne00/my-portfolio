import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { ThemeContext } from '../theme/ThemeContext';

function ProjectGrid({ project, index }) {
  const { theme } = useContext(ThemeContext);
  const { title, overview, imgpath, tags, repoURL, description } = project;

  // determine if project has a "detail" page
  const hasDetailPage = description;

  // classes for main div container
  const containerClasses = [
    `grid-${theme}`,
    'p-5',
    'rounded-lg',
    'shadow-md',
    'flex',
    'flex-col',
    'transition-transform',
  ];

  // add hover effect only if project has detail page
  if (hasDetailPage) containerClasses.push('hover:scale-105');

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
    hiddenBtm: { opacity: 0, y: window.innerWidth <= 768 ? '50px' : '100px' },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={containerClasses.join(' ')}>
      {/* direct to project details page on click */}
      <Link
        key={index}
        to={hasDetailPage ? `/${index}` : '#'}
        className='flex-grow mb-2'
        style={{
          cursor: hasDetailPage ? 'pointer' : 'default',
        }}>
        <motion.div
          ref={ref}
          initial={index % 2 !== 0 ? 'hiddenTop' : 'hiddenBtm'}
          animate={
            inView ? 'visible' : index % 2 !== 0 ? 'hiddenTop' : 'hiddenBtn'
          }
          variants={variants}
          transition={{ duration: 0.5 }}>
          <img
            src={imgpath}
            alt={`${title} preview`}
            className='mb-4 rounded h-48 object-cover mx-auto'
          />
        </motion.div>

        <h2 className='text-2xl font-semibold mb-3'>{title}</h2>

        <p className='mb-4 leading-tight'>{overview}</p>
      </Link>

      {/* project tags & link to repo */}
      <div className='flex justify-between items-center mb-3'>
        <div className='flex'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='inline-block bg-cyan-700 text-cyan-100 font-mono text-xs font-medium mr-2 px-2.5 py-0.5 rounded '>
              {tag}
            </span>
          ))}
        </div>

        <Button
          variant='contained'
          color='primary'
          size='small'
          endIcon={<GitHub />}
          href={repoURL}
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            backgroundColor: '#191102',
            '&:hover': {
              backgroundColor: '#414770', // on hover
            },
          }}>
          Source
        </Button>
      </div>
    </div>
  );
}

export default ProjectGrid;
