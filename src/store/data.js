import About from '@/views/About.vue'

export default {
  experience: [
    {
      id: 1,
      function: 'Developpeur integrateur web',
      company: 'FimaInfo',
      period: '2022',
      stacks: 'JavaScript, SQL, Git',
      description: 'Developpement de solution web pour plateforme de telephonie',
      url_img: '/public/experience/web_developper.png',
      tasks: [
        'Analyse des besoins clients',
        'Conception et développement d’interfaces utilisateur',
        'Intégration de services backend',
        'Gestion de bases de données SQL',
        'Tests et débogage des applications web',
        'Collaboration avec les équipes de développement',
        'Mise en production et maintenance des applications',
      ],
    },
    {
      id: 2,
      function: 'Developpeur web',
      company: 'Servius',
      period: '2021-2022',
      stacks: 'Vuejs, Java, Git',
      description: "Developpement d'interface web de gestion de livraison par facturation de colis",
      url_img: '/public/experience/logistic.png',
      tasks: [
        'Analyse des besoins fonctionnels et techniques',
        'Conception et développement d’interfaces utilisateur',
        'Intégration de services backend',
        'Utilisation de frameworks Vuejs',
      ],
    },
    {
      id: 3,
      function: "Operateur sur centre d'usinage",
      company: 'Monnot, JTEKT, Tyco, etc...',
      period: '2013-2020',
      stacks: 'CATIA V5',
      description: 'Fabrication de pièces mécaniques à usage industriel, automobile, ferroviaire.',
      url_img: '/public/experience/operator_milling_tools.png',
      tasks: [
        'Analyse des plans de fabrication',
        'Programmation de machines à commande numérique',
        'Contrôle qualité des pièces usinées',
        'Maintenance préventive et corrective des machines',
        'Collaboration avec les équipes de production',
        'Optimisation des processus de fabrication',
        'Formation des nouveaux opérateurs',
        'Utilisation de logiciels de CAO/FAO pour la conception et la programmation',
      ],
    },
  ],
  skill: [
    {
      id: 1,
      name: 'Vuejs',
      url_img: '/public/skill/logo_vue.png',
    },
    {
      id: 2,
      name: 'Laravel',
      url_img: '/public/skill/logo_laravel.png',
    },
    {
      id: 3,
      name: 'Git',
      url_img: '/public/skill/logo_git.png',
    },
  ],
  project: [
    {
      id: 1,
      name: 'DaVinciMedia',
      description: "Bibliotèque de medias avec connection à l'API TMDB",
      url_img: '/project/davincimedia.jpeg',
      stacks: ['Vuejs', 'Laravel'],
      img_stack: ['/skill/logo_vue.png', '/skill/logo_laravel.png'],
      img_stack_alt: ['Vuejs', 'Laravel'],
      url_github: 'https://github.com/Kevin-DA-RE/davincimedia',
      descriptif: [
        'Biblioteque regroupant tous les medias par compte utilisateur.',
        "Gestion complete des medias par l'utilisateur",
        'Récupération des informations par media importé',
        'Recherche intuitive des medias par titre',
        'Tri personnalisé des medias par catégorie',
      ],
    },
    {
      id: 2,
      name: 'API CAT',
      description: 'Créations de fiches clients pour enquêtes de satisfaction via pltateforme web',
      url_img: '/experience/web_developper.png',
      stacks: ['Nodejs'],
      img_stack: ['/skill/logo_nodejs.png'],
      img_stack_alt: ['Nodejs'],
      descriptif: [
        'Recuperation de fichiers csv',
        'Creation de fiches clients en base de données pour les enquetes de satisfaction',
        'Historisation des données',
        "Déplacement des fichiers traites dans repertoire d'archives",
      ],
    },
  ],
  about: [
    {
      id: 1,
      name: 'Investi',
    },
    {
      id: 2,
      name: 'Passioné',
    },
    {
      id: 3,
      name: 'Téméraire',
    },
  ],
  aboutDetails: [
    {
      id: 1,
      title: 'Moi en quelques mots',
      descriptif: `Je suis une personne timide et reservé mais capable de travailler en équipe et collaborer
        sur différents projets.
        J'aime apprendre de nouvelles choses et je suis toujours prêt à
        relever de nouveaux défis.
        J'ai un esprit curieux et j'aime explorer de nouveaux domaines, que ce soit dans le domaine professionnel ou personnel.
        J'ai toujours été passionné par l'informatique.
        C'est d'ailleurs pour cela que j'ai débuté ma carrière dans l'industrie dans
        lequel j'ai développé des programmes pour fabriquer des pièces mécaniques puis j'ai effectué une reconversion professionnelle dans le développement web afin de concevoir des applications web modernes. 
        L'idée de développer une ou plusieurs solutions sur un projet afin de répondre à aux besoins clients me motive à me surpasser et à apprendre de nouvelles compétences.
        Je suis très investi quand il s'agit de relever des défis pour atteindre un objectif. 
        J'aime aussi partager mes connaissances et aider les autres à progresser quand l'occasion se présente.`,
    },
    {
      id: 2,
      title: 'Loisirs et passions',
      descriptif: `En dehors du travail, j'aime beaucoup les jeux videos notamment les jeux de simulations.
        Ces jeux m'aident à me projeter dans des rôles importants et m'apprennent à être stratégique et réfléchi.
        J'aime également regarder des séries et des films et j'ai meme un faible pour les films d'horreur. 
        J'écoute beaucoup de musique instumentale, cela m'aide à mévader et à me concentrer.
        Etant père de famille, j'apprécie également passer du temps avec mon fils et ma femme. 
        J'aime beaucoup montrer à mon fils de nouveaux jeux et l'aider à progresser.
      `,
    },
    {
      id: 3,
      title: 'Caractère',
      descriptif: `Je dirai que je suis une personne observatrice, calme et téméraire.
        Je suis très rigoureux dans mon travail et j'aime que les choses soient bien faites.
        Je suis aussi quelqu'un qui a de l'humour et aime faire rire les gens. 
        Quelque soit mes tâches à effectuer, je suis toujours investi et motivé dans ce que je fais.
        Enfin, meme si je suis timide, j'aime être entouré de personnes et partager des moments conviviaux.`,
    },
  ],
  contact:{
    mail: `dare.kevin21000@gmail.com`,
    phone: `06 50 06 02 81`,
    localisation: `Dijon`,
  }
}
