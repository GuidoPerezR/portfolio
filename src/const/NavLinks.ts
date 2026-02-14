interface NavLink {
  id?: string;
  title: string;
  href: string;
  description: string;
}

export const NAVLINKS: NavLink[] = [
  {
    id: 'about',
    title: 'Sobre Mi',
    href: '/about',
    description:
      'Conoce mi historia, habilidades y pasión por el desarrollo web',
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
