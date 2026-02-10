interface NavLink {
  title: string;
  href: string;
  description: string;
}

export const NAVLINKS: NavLink[] = [
  {
    title: 'Sobre Mi',
    href: '/about',
    description:
      'Conoce mi historia, habilidades y pasión por el desarrollo web',
  },
  {
    title: 'Experiencia',
    href: '#experiencia',
    description:
      'Descubre mi trayectoria profesional y proyectos en los que he trabajado',
  },
  {
    title: 'Proyectos',
    href: '#proyectos',
    description:
      'Explora los proyectos que he desarrollado y las tecnologías utilizadas',
  },
  {
    title: 'Contacto',
    href: '#contacto',
    description: 'Ponte en contacto conmigo para colaboraciones o consultas',
  },
  {
    title: 'Descargar CV',
    href: '/cv',
    description: 'Descarga mi currículum completo en formato PDF',
  },
];
