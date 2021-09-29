import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faMendeley } from '@fortawesome/free-brands-svg-icons/faMendeley';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://scholar.google.com/citations?user=nCQs42AAAAAJ&hl=en',
    label: 'scholar',
    icon: faMendeley,
  },
  {
    link: 'https://www.linkedin.com/in/yi-zhang-5b135a97/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/Wado_Will',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://github.com/ZWado',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'mailto:yizhang5@seas.upenn.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
