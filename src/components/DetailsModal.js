import React, { useContext } from 'react';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';

import '../App.css';
import { ThemeContext } from '../theme/ThemeContext';

function DetailsModal({ project, open, handleClose }) {
  const { theme } = useContext(ThemeContext);
  const { title, description, repoURL, yt_embed } = project;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'>
      <div
        className={`absolute ${theme} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 p-8 shadow-lg rounded-lg sm:w-11/12 flex flex-col items-center`}>
        {/* Close Button */}
        <CancelIcon
          className='absolute top-3 right-3 cursor-pointer hover:text-zinc-500 transition'
          onClick={handleClose}
        />

        {/* Title */}
        <h1 className='text-3xl font-serif font-bold text-center mb-5'>
          {title}
        </h1>

        {/* Description */}
        <p
          className={`${theme}-text-secondary text-base leading-tight text-center mb-5 md:w-5/6`}>
          {description}
        </p>

        {/* YouTube Embed */}
        {yt_embed && (
          <iframe
            title={`${title} demo`}
            width='90%'
            height='500'
            src={yt_embed}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='my-5'
          />
        )}

        <div className='w-full text-left'>
          {/* GitHub Repo Button */}
          <a
            href={repoURL}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-blue-300 mb-3 hover:text-zinc-500 transition'>
            Source Code
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default DetailsModal;
