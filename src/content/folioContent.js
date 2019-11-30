const folioContent = [
  {
    id: 1,
    rubric: 'ПРОСТОЙ ОПТИМИЗАТОР ДЛЯ SVG PATH',
    content:
      "Данная оптимизация целесообразна в случае избыточного кода после точки в координатах path. В основном такой код получается при работе с редактором Inkscape (в Inkscape нужно также нажать кнопочку 'упростить' или Ctrl+L, без этого бывают непредсказуемые результаты), в Adobe Illustrator после точки наблюдал два знака, оптимизировать можно на 3-8%.",

    preview: 'link from github and button',
    path: 'https://urgenmagger.github.io/svg_optim/',
    linkButton: 'DEMO',
    iconSource: require('../img/github_logo.svg'),
    textSource: 'посмотреть код',
    note: 'pet project изначально был сделан для собстевнных нужд',
    technologies: [{id: 1, tech: 'jQuery,   '}, {id: 2, tech: 'regular expressions'}],
    topIcons: [
      {id: 1, icon: require('../img/jq.svg')},
      {id: 2, icon: require('../img/j_opt.svg')},
    ],
  },
  {
    id: 2,
    rubric: 'ПРОСТОЙ',
    content: 'Данная оптимизация целесообразна ',

    preview: 'link from github and button',
    path: 'https://urgenmagger.github.io/svg_optim/',
    linkButton: 'DEMO',
    note: 'pet project изначально был сделан для собстевнных нужд',
    technologies: [{id: 1, tech: 'RaphaelJS'}, {id: 2, tech: 'jQury'}],
    topIcons: [
      {id: 1, icon: require('../img/j_opt.svg')},
      {id: 2, icon: require('../img/r_e.svg')},
    ],
  },
];

export default folioContent;
