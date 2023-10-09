import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ThemeContext } from '../theme/ThemeContext';
import Projects from '../assets/projectData';

function ProjectDetail() {
  const { theme } = useContext(ThemeContext);
  const { projectID } = useParams();
  const project = Projects[projectID];

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className={`${theme} min-h-screen flex flex-col items-center`}>
      {/* Back Button */}
      <div className='w-full p-4 text-left'>
        <button
          onClick={handleBackClick}
          className='text-blue-500'
          aria-label='Back button'>
          &lt; Back
        </button>
      </div>

      {/* Title */}
      <h1 className='text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center mt-5 mb-5'>
        {project.title}
      </h1>

      {/* Description */}
      <p className='text-xs sm:text-sm md:text-lg text-center mb-5 w-5/6'>
        {project.description}
      </p>

      {/* GitHub Repo Button */}
      <a
        href={project.repoURL}
        target='_blank'
        rel='noopener noreferrer'
        className='text-white bg-black px-4 py-2 rounded mb-3 hover:bg-zinc-800 transition'>
        Source Code
      </a>

      {/* YouTube Embed */}
      {project.yt_embed && (
        <iframe
          title={`${project.title} demo`}
          width='80%'
          height='500'
          src={project.yt_embed}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='my-5'
        />
      )}

      {/* Tags */}
      <div className='flex flex-wrap gap-2 mt-3 self-end w-1/4'>
        <span>Tags:</span>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className='text-xs bg-zinc-500 text-white px-2 py-1 rounded font-mono'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
