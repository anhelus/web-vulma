import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'VULMA', // e.g: 'Name | Developer'
  lang: 'it', // e.g: en, es, fr, jp
  description: 'Welcome to VULMA - Web Repository', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'This is',
  name: 'VULMA',
  subtitle: 'Get a vulnerability index from a single picture',
  cta: 'Discover VULMA',
};

// ABOUT DATA
export const aboutData = {
  img: 'vulnerability.jpg',
  paragraphOne:
    'Do you believe it is possible to estimate the vulnerability of a building using only a photo?',
  paragraphTwo: 'If not, maybe you need to get to know VULMA!',
  paragraphThree:
    'This project is made of a series of tools for defining, testing and validating a machine-learning approach that determines a vulnerability index starting from just a picture of a building.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'streetview.jpg',
    title: 'Street-VULMA',
    info: 'Street-VULMA is a tool which allows to gather data directly from GeoJSON files.',
    info2:
      'With Street-VULMA, you can directly convert a GeoJSON into images. Try it using the source code linked below!',
    url: 'https://github.com/anhelus/street-vulma',
    repo: 'https://github.com/anhelus/street-vulma', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Data-VULMA',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Get-VULMA',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'In-VULMA',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you want to cooperate on this research, reach us!',
  btn: 'Contact us',
  email: 'sergio.ruggieri@poliba.it',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'university',
      url: 'https://www.poliba.it',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
