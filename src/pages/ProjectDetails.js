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

  return (
    <div className={`${theme} min-h-screen flex flex-col items-center`}>
      {/* Back Button */}
      <div className='w-full p-4 text-left'>
        <button onClick={handleBackClick} className='text-blue-500'>
          &lt; Back
        </button>
      </div>

      {/* Title */}
      <h1 className='text-4xl font-bold text-center mt-5'>{project.title}</h1>

      {/* Description */}
      <p className='text-lg text-center mt-3 mb-5 max-w-xl'>
        {project.description}
      </p>

      {/* YouTube Embed */}
      {project.yt_embed && (
        <iframe
          title={`${project.title} demo`}
          width='90%'
          height='500'
          src={project.yt_embed}
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          className='my-5'
        />
      )}

      {/* GitHub Repo Button */}
      <a
        href={project.repoURL}
        target='_blank'
        rel='noopener noreferrer'
        className='text-white bg-blue-500 px-4 py-2 rounded mb-3 hover:bg-blue-600 transition'>
        View on GitHub
      </a>

      {/* Tags */}
      <div className='flex flex-wrap gap-2'>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className='text-xs bg-green-600 text-white px-2 py-1 rounded'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
