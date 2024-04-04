import React from 'react';
import { ExpandMore, LaunchOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import myresume from '../assets/pdf/my_resume.pdf';

const Home = ({ scrollToProjects }) => {
  const { theme } = useTheme();

  // set diff text gradients based on theme
  const gradient =
    theme === 'dark'
      ? 'bg-gradient-to-r from-fuchsia-400 to-rose-400'
      : 'bg-gradient-to-r from-fuchsia-800 to-rose-800';

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className={`${theme} min-h-screen`}>
      <motion.div
        className="min-h-screen relative flex flex-col sm:flex-row items-center justify-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div className="flex flex-col items-center justify-center space-y-4 sm:space-y-10">
          <motion.span
            className="italic font-bold text-2xl sm:text-4xl"
            variants={itemVariants}>
            Hello, I am{' '}
            <motion.span
              className={`${gradient} bg-clip-text text-transparent`}
              variants={itemVariants}>
              June
            </motion.span>{' '}
            and this is my portfolio.
          </motion.span>

          <motion.button
            onClick={() => window.open(myresume, '_blank')}
            className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 rounded-md text-white font-semibold px-2 py-1 sm:px-3 sm:py-2 shadow-md transform transition hover:scale-105 text-xs sm:text-base"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ filter: 'brightness(1.1)' }}>
            <LaunchOutlined className="text-base sm:text-lg" /> Resume
          </motion.button>

          <motion.div
            className="absolute bottom-4 left-0 right-0 flex justify-center items-center cursor-pointer"
            onClick={scrollToProjects}
            animate={{ y: ['0%', '-20%'], opacity: [0.5, 1] }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}>
            {/* Additional ExpandMore icon to the left */}
            <motion.div
              animate={{ y: ['0%', '-20%'] }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}>
              <ExpandMore className="text-lg sm:text-2xl" />
            </motion.div>

            <span className={`text-lg sm:text-xl ${theme}-text-secondary mx-2`}>
              View Projects
            </span>

            {/* Original ExpandMore icon to the right */}
            <motion.div
              animate={{ y: ['0%', '-20%'] }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}>
              <ExpandMore className="text-lg sm:text-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
