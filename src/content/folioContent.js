const folioContent = [
  {
    id: 1,
    rubric: 'ПРОСТОЙ ОПТИМИЗАТОР ДЛЯ SVG PATH',
    content:
      "Данная оптимизация целесообразна в случае избыточного кода после точки в координатах path. В основном такой код получается при работе с редактором Inkscape (в Inkscape нужно также нажать кнопочку 'упростить' или Ctrl+L, без этого бывают непредсказуемые результаты), в Adobe Illustrator после точки наблюдал два знака, оптимизировать можно на 3-8%.",
    preview: 'link from github and button',
    path: 'https://urgenmagger.github.io/svg_optim/',
    linkButton: 'DEMO',
    detail: 'подробнее',
    linkDetail:
      'https://github.com/urgenmagger/svg_optim/blob/master/README.md',
    linkSource: 'https://github.com/urgenmagger/svg_optim',
    iconSource: require('../img/github_logo.svg'),
    textSource: 'посмотреть код',
    note: 'pet project изначально был сделан для собстевнных нужд',
    technologies: [
      {id: 1, tech: 'jQuery,\u00A0'},
      {id: 2, tech: ' regular expressions'},
    ],
    topIcons: [
      {id: 1, icon: require('../img/jq.svg')},
      {id: 2, icon: require('../img/r_e_white.svg')},
    ],
  },
  {
    id: 2,
    rubric: 'Консольное CRUD приложение на Java',
    content:
      'Приложение tracker (создание, удаление, редактирование, добавление заявок. Применины основные принципы ООП, а также паттерны проектирования(Декоратор, Стратегия))',
    preview: 'link from github and button',
    path: 'https://www.youtube.com/watch?v=mLO1js8lgvQ',
    linkButton: 'DEMO',
    detail: 'подробнее',
    linkDetail:
      'https://github.com/urgenmagger/JavaCourse/blob/master/README.md',
    linkSource:
    'https://github.com/urgenmagger/JavaCourse/tree/master/chapter_002/src/main/java/ru/job4j/tracker',
    iconSource: require('../img/github_logo.svg'),
    textSource: 'посмотреть код',
    note: 'разработка велась в рамках обучающего курса',
    technologies: [
      {id: 1, tech: 'Java,\u00A0'},
      {id: 2, tech: 'Maven,\u00A0 '},
      {id: 3, tech: 'JUnit'},
    ],
    topIcons: [
      {id: 1, icon: require('../img/java_icon.svg')},
    ],
  },
  {
    id: 3,
    rubric: 'SPA приложение',
    content: 'Web приложение для портфолио, динамическое использование карточек, проект будет пополнятся',
    preview: 'link from github and button',
    path: 'https://urgenmagger.github.io/myFolio/#/',
    linkButton: 'DEMO',
    detail: 'подробнее',
    linkDetail: 'https://github.com/urgenmagger/folio/blob/master/README.md',
    linkSource: 'https://github.com/urgenmagger/folio',
    iconSource: require('../img/github_logo.svg'),
    textSource: 'посмотреть код',
    note: 'проект собран для портфолио',
    technologies: [
      {id: 1, tech: 'React,\u00A0'},
      {id: 2, tech: 'Redux,\u00A0 '},
    ],
    topIcons: [
      {id: 2, icon: require('../img/redux.svg')},
      {id: 1, icon: require('../img/react.svg')},
    ],
  },
];

export default folioContent;
