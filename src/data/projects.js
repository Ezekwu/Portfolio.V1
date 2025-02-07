import CourageImg from '../assets/images/projects/courageportfolio/courage-ss1.png';
import HomehubImg from '../assets/images/projects/homehub/home-hub-ss1.png';
import Eatrite from '../assets/images/projects/eatrite.png'

export const projects = [
  {
    name: 'EatRiteWithLulu',
    duration: '1st Dec - Present',
    technologies: ['React', 'Tailwind', 'Fire-base', 'React-query'],
    liveSite: 'https://www.eatritewithlulu.com/',
    thumbnail: Eatrite,
  },

  {
    name: 'Courage Egbude',
    duration: '21st Oct - 4th Nov 2022',
    technologies: ['React', 'Styled-Components', 'Framer-Motion'],
    githubLink: 'https://github.com/Ezekwu/courage-portfolio.git',
    liveSite: 'https://courageegbude.netlify.app/',
    viewMoreLink: '/project/Courageegude',
    thumbnail: CourageImg,
  },
  {
    name: 'Home Hubb',
    duration: '12th Sept - 16th Oct 2022',
    technologies: ['React', 'Styled-Components', 'Firebase'],
    githubLink: 'https://github.com/Ezekwu/HomeHub.git',
    liveSite: 'https://homehubb.netlify.app/',
    viewMoreLink: '/project/HomeHub',
    thumbnail: HomehubImg,
  },
];
