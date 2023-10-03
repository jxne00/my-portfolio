const Projects = [
  {
    title: 'Portfolio Website',
    imgpath: require('../assets/images/placeholder-1.png'),
    overview: 'The current website you are on! Built using React.',
    repoURL: 'https://github.com/jxne00/jxne00.github.io',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'WatchJourney',
    imgpath: require('../assets/images/watchjourney-img.png'),
    overview:
      'A mobile application to keep track of your TV series and movie watch progress. Utilises the TMDB API to fetch movie and tv show data, and Firebase for authentication.',
    description:
      'WatchJourney is a mobile application developed in React Native, with the intention of helping people keep track of movies and TV shows they have watched, are watching now, and want to watch in the future. It inludes several features such as a search function, login and registration using Firebase, and also supports light and dark mode. Details of the movies and TV shows are fetched from the TMDb API.',
    repoURL: 'https://github.com/jxne00/WatchJourney',
    tags: ['React Native', 'Firebase', 'API'],
    yt_embed: 'https://www.youtube.com/embed/y8pgnlDIUoE?si=MK-cUjeZ-KvyuUTX',
  },
  {
    title: 'Brand Mentions Sentiment',
    imgpath: require('../assets/images/brandmentions-img.png'),
    overview:
      'Sentiment analysis of brand mentions on Twitter using a multinomial Naive Bayes classifier to set a baseline, then compared with a linear regression model.',
    repoURL: 'https://github.com/jxne00/brand-mentions-sentiment',
    tags: ['Sentiment Analysis', 'Python'],
    html_link:
      'https://jxne00.github.io/brand-mentions-sentiment/Sentiment%20Analysis',
  },
  {
    title: 'Calculator App',
    imgpath: require('../assets/images/calculator-img.png'),
    overview:
      'A simple calculator built using React Native that mimics the design of the default iOS calculator.',
    description:
      'A simple calculator built using React Native and Expo. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division, as well as several scientific operations such as logarithm and pi. There is also dark mode support. The design of the calculator is inspired by the iOS calculator.',
    repoURL: 'https://github.com/jxne00/calculator-app',
    tags: ['React Native', 'Expo'],
  },
  {
    title: 'University Rank Analysis',
    imgpath: require('../assets/images/unirank-img.png'),
    overview:
      'An exploratory data analysis on the correlation between university ranking and employment outcome in Singapore.',
    repoURL: 'https://github.com/jxne00/uni-rank-analysis',
    tags: ['Data Analysis', 'Python'],
    html_link: 'https://jxne00.github.io/uni-rank-analysis/uni-rank-analysis',
  },
  {
    title: 'Angry Birds Game',
    imgpath: require('../assets/images/angrybird-img.png'),
    overview:
      'A simple Angry Birds game built using p5js JavaScript library. The goal is to knock all the cubes out of the screen.',
    description:
      'The Angry Birds game is a simple game developed using p5.js, where the player controls a slingshot to launch birds at a cube tower. The goal is to knock all the cubes out of the screen before the timer runs out.',
    repoURL: 'https://github.com/jxne00/angrybirds-game',
    tags: ['p5js'],
    yt_embed: 'https://www.youtube.com/embed/jbcCKKeR8vE?si=ShAqkDVSOIcVcu3r',
  },
  {
    title: 'AudioMix',
    imgpath: require('../assets/images/audiomix-img.png'),
    overview:
      'A music player developed using the C++ JUCE Framework that allows loading, playing, and adjusting of tracks, including speed, volume, and position.',
    description:
      'AudioMix is a DJ application developed using the C++ JUCE Framework. It allows adding of multiple audio files into the deck or the playlist. After a track is loaded onto the deck, the user can play, pause, loop, and reset the track, as well as adjust its speed and volume. When two tracks are loaded onto the deck, the user can crossfade between the two tracks. Lastly, a search bar is available to allow the user to search for a specific track in the playlist. The playlist persists when the application is closed and reopened.',
    repoURL: 'https://github.com/jxne00/AudioMix',
    tags: ['C++', 'JUCE Framework'],
    yt_embed: 'https://www.youtube.com/embed/sc-KKXfUTHE?si=6_wnEKxnyYELGm1X',
  },
  {
    title: 'SmartHomey',
    imgpath: require('../assets/images/smarthomey-img.png'),
    overview:
      'A dynamic Node.js web application that allows users to manage devices in their smart home. The backend is powered by Express, and data management is handled using SQL.',
    description:
      'SmartHomey is a dynamic web application that acts as a smart home dashboard to allow users to control their smart home devices such as lights, speakers, and CCTVs. The backend is built using node.js and express, using an SQL database to store device data. The frontend is built using HTML, CSS, and EJS.',
    repoURL: 'https://github.com/jxne00/smartHomey',
    tags: ['Node.js', 'Express', 'SQL'],
    yt_embed: 'https://www.youtube.com/embed/pdR0iC8Lfq0?si=YOMg-IoTQp8QKEtf',
  },
  {
    title: 'Restaurant App',
    imgpath: require('../assets/images/restaurant-img.png'),
    overview:
      'A food ordering mobile application showing different restaurants and their menu items.',
    repoURL: 'https://github.com/jxne00/restaurants-app',
    tags: ['React Native', 'Expo'],
  },
  {
    title: 'Food Ordering System',
    imgpath: require('../assets/images/foodordering-img.png'),
    overview:
      'A food ordering system developed using the ASP.NET Core Framework and SQL for the backend. Made for my Final Year Project in Republic Polytechnic.',
    repoURL: 'https://github.com/jxne00/smartHomey',
    tags: ['ASP.NET Core'],
  },
];

export default Projects;
