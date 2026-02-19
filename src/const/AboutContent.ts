export type Locale = 'es' | 'en';

export const ABOUT_CONTENT = {
  es: {
    title: 'Sobre mí',
    technologiesLabel: 'Tecnologías',
    imageAlt: 'Imagen de Guido Perez Ruiz',
    paragraphs: [
      {
        prefix: 'Desarrollador web con ',
        highlight: '2 años de experiencia',
        suffix:
          '. Me enfoco en el desarrollo Front-end, utilizando tecnologías como TypeScript, React y Tailwind CSS.',
      },
      {
        prefix: 'Me gusta crear sitios que puedan ',
        highlight: 'resolver la necesidad',
        suffix:
          ' del cliente de forma atractiva, optimizada y brindando la mejor experiencia de usuario.',
      },
      {
        prefix: 'Siempre estoy ',
        highlight: 'mejorando mis habilidades',
        suffix:
          ' para poder brindar una nueva experiencia en cada sitio que realizo.',
      },
    ],
  },
  en: {
    title: 'About me',
    technologiesLabel: 'Technologies',
    imageAlt: 'Image of Guido Perez Ruiz',
    paragraphs: [
      {
        prefix: 'Web developer with ',
        highlight: '2 years of experience',
        suffix:
          '. I focus on Front-end development using technologies like TypeScript, React and Tailwind CSS.',
      },
      {
        prefix: 'I like to create websites that can ',
        highlight: "solve the client's needs",
        suffix:
          ' in an attractive and optimized way with the best user experience.',
      },
      {
        prefix: 'Always ',
        highlight: 'improving my skills',
        suffix: ' to provide a better experience in every website I create.',
      },
    ],
  },
} as const;
