import { Email, ArticleOutlined } from '@mui/icons-material';

function Footer() {
  return (
    <footer className='py-4'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <p className='text-sm text-zinc-200'>
          &copy; {new Date().getFullYear()} JUNE.
        </p>

        <div className='flex items-center'>
          {/* Email */}
          <a href='mailto:june.pangg@gmail.com' className='mr-4'>
            <Email
              sx={{
                color: '#A5A2B9',
                '&:hover': {
                  color: '#414770', // on hover
                },
              }}
            />
          </a>

          {/* Resume Button */}
          <a
            href='/' // TODO: add resume link
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded flex items-center'>
            <ArticleOutlined fontSize='small' /> Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
