import type { NavLink } from '@/types/NavLinks';

export const NAVLINKS: NavLink[] = [
  {
    id: 'about',
    title: 'About Me',
    href: '/en/about',
    description: 'Learn about my skills and passion for web development',
  },
  {
    id: 'experience',
    title: 'Experience',
    href: '/experience',
    description:
      'Discover my professional background and projects I have worked on',
  },
  {
    id: 'projects',
    title: 'Projects',
    href: '/projects',
    description:
      'Explore the projects I have developed and the technologies used',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch with me for collaborations or inquiries',
  },
  {
    title: 'Download CV',
    href: '/files/Currículum_Vitae_Guido_Pérez_Ruiz.pdf',
    description: 'Download my complete CV in PDF format',
  },
];
