import type { NavLink } from '@/types/NavLinks';

export const NAVLINKS_ES: NavLink[] = [
  {
    id: 'about',
    title: 'Sobre Mí',
    href: '/about',
    description: 'Conoce mis habilidades y pasión por el desarrollo web',
  },
  {
    id: 'experience',
    title: 'Experiencia',
    href: '/experience',
    description:
      'Descubre mi trayectoria profesional y proyectos en los que he trabajado',
  },
  {
    id: 'projects',
    title: 'Proyectos',
    href: '/projects',
    description:
      'Explora los proyectos que he desarrollado y las tecnologías utilizadas',
  },
  {
    id: 'contact',
    title: 'Contacto',
    href: '/contact',
    description: 'Ponte en contacto conmigo para colaboraciones o consultas',
  },
  {
    title: 'Descargar CV',
    href: '/files/Currículum_Vitae_Guido_Pérez_Ruiz.pdf',
    description: 'Descarga mi currículum completo en formato PDF',
  },
];

const NAVLINKS_EN: NavLink[] = [
  {
    id: 'about',
    title: 'About Me',
    href: '/en/about',
    description: 'Learn about my skills and passion for web development',
  },
  {
    id: 'experience',
    title: 'Experience',
    href: '/en/experience',
    description:
      'Discover my professional background and projects I have worked on',
  },
  {
    id: 'projects',
    title: 'Projects',
    href: '/en/projects',
    description:
      'Explore the projects I have developed and the technologies used',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/en/contact',
    description: 'Get in touch with me for collaborations or inquiries',
  },
  {
    title: 'Download CV',
    href: '/files/CV_Guido_Pérez_Ruiz.pdf',
    description: 'Download my complete CV in PDF format',
  },
];

export const NAV_CONTENT = {
  es: NAVLINKS_ES,
  en: NAVLINKS_EN,
};
