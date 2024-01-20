// gitprofile.config.js

const config = {
  github: {
    username: 'sazzadalam1200', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sazzad-alam-494152197',
    twitter: 'sazzadalamnick',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '11652204/nick', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://sazzadalam1200.github.io/',
    phone: '',
    email: 'sazzadalam.work@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1fo_BzdnasjzuBxwWtRt0Emtn-e6p4IRO', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Node.js',
    'MongoDB',
    'MySQL',
    'Git',
    'HTML',
    'CSS',
    'Wordpress',
  ],
  experiences: [
    {
      company: 'Lofistack',
      position: 'Wordpress Developer',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://lofistack.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'North South University',
      degree: 'Computer Science & Engineering (CSE)',
      from: '2016',
      to: '2022',
    },
    {
      institution: 'Chittagong City College',
      degree: 'Higher Secondary School Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
    {
      institution: 'Chittagong Collegiate School',
      degree: 'Secondary School Certificate (SSC)',
      from: '2006',
      to: '2012',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Lofistack',
      description: 'Official Site for Lofistack.',
      imageUrl:
        'https://drive.google.com/uc?id=1Nfvq-BdpQq7Zlz5xLS9jxkg0dEFtotU6',
      link: 'https://lofistack.com/',
    },
    {
      title: 'Cludio Vape',
      description: 'Vape site based on Dubai, UAE',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://cludio.lofistack.com/',
    },
    {
      title: 'CS2Fight',
      description: 'Prostate cancer awareness site',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: ' https://courageandstrengthtofight.com/',
    },
    {
      title: 'Clark Salon & Spa',
      description: 'CANTON, GEORGIA based Salon',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://clarksalon.com/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'sazzadalam1200', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'synthwave',
      'halloween',
      'forest',
      'lofi',
      'luxury',
      'dracula',
      'lemonade',
      'night',
      'coffee',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Copyright ©2024 <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,
};

export default config;
