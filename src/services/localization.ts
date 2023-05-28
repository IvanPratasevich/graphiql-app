import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      current_lng: 'ru',
      welcome: 'Добро пожаловать',
      sign_in: 'Войти',
      sign_up: 'Регистрация',
      main: 'Главная',
      sign_out: 'Выйти',
      variables: 'Переменные',
      headers: 'Заголовки',
      ivan: 'Иван',
      vitali: 'Виталий',
      sergey: 'Сергей',
      invalid_email: 'Неверный адрес электронной почты',
      your_email: 'Ваш адрес электронной почты',
      wrong_password: 'Bы ввели неверный пароль',
      user_not_found: 'Пользователь не найден',
      email_already_in_use: 'Электронная почта уже используется',
      users: [
        {
          id: 1,
          name: 'Иван',
          githubUrl: 'https://github.com/IvanPratasevich',
          imageUrl: 'https://avatars.githubusercontent.com/u/85807287?v=4',
          description: '',
          badges: ['разработчик', 'тимлид'],
          colors: ['cyan', 'red'],
          github: 'Гитхаб Ивана',
        },

        {
          id: 2,
          name: 'Виталий',
          githubUrl: 'https://github.com/vitalisavelyev',
          imageUrl: 'https://avatars.githubusercontent.com/u/79810929?v=4',
          description: '',
          badges: ['разработчик', 'архитектор'],
          colors: ['cyan', 'yellow'],
          github: 'Гитхаб Виталия',
        },

        {
          id: 3,
          name: 'Сергей',
          githubUrl: 'https://github.com/sergey-lesnevskiy',
          imageUrl: 'https://avatars.githubusercontent.com/u/78030028?v=4',
          description: '',
          badges: ['разработчик', 'файрбэйз'],
          colors: ['cyan', 'orange'],
          github: 'Гитхаб Сергея',
        },
      ],
      app_description: `GraphiQL - это удобная среда разработки для тестирования GraphQL API. Она предоставляет графический интерфейс для создания и выполнения запросов, мутаций и подписок в реальном времени. GraphiQL поддерживает подсветку синтаксиса, выделение ошибок и фрагменты кода, что упрощает работу с GraphQL API. В целом, GraphiQL упрощает процесс тестирования и отладки GraphQL API, экономя время и усилия разработчиков. Одно из ключевых преимуществ GraphiQL - это его способность предоставлять документацию схемы для GraphQL API. Эта документация может быть просмотрена непосредственно в интерфейсе GraphiQL, что позволяет разработчикам быстро и легко понять структуру и возможности API. Это может быть особенно полезно при работе с большими или сложными API, где понимание схемы может быть вызовом. Еще одним преимуществом GraphiQL является поддержка нескольких языков программирования и фреймворков. Он может использоваться с JavaScript, Python, Ruby, Java и многими другими языками и фреймворками, что делает его универсальным инструментом для разработчиков, работающих в различных средах. GraphiQL также поддерживает совместную разработку, позволяя нескольким разработчикам работать с одним API одновременно. Это можно достичь с помощью систем контроля версий, таких как Git, или с использованием инструментов, таких как Apollo Studio, которые предоставляют общую рабочую среду для разработки GraphQL. В заключение, GraphiQL - это мощный и гибкий инструмент, который упрощает работу с GraphQL API. Его удобный интерфейс, передовые возможности и гибкость делают его неотъемлемым инструментом для разработчиков, которые хотят работать более эффективно и эффективно с GraphQL API.`,
      ytb_video: 'YouTube Видео',
      includes_number: 'Содержит число',
      includes_lowercase_letter: 'Содержит строчную букву',
      includes_uppercase_letter: 'Содержит заглавную букву',
      includes_special_symbol: 'Содержит специальный символ',
      your_password: 'Ваш пароль',
      includes_at_least_8_characters: 'Содержит не менее 8 символов',
      team_member_description:
        'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
    },
  },
  en: {
    translation: {
      current_lng: 'en',
      welcome: 'Welcome',
      sign_in: 'Sign in',
      sign_up: 'Sign up',
      main: 'Main',
      sign_out: 'Sign out',
      variables: 'Variables',
      headers: 'Headers',
      ivan: 'Ivan',
      vitali: 'Vitali',
      sergey: 'Sergey',
      invalid_email: 'Invalid email',
      your_email: 'Your email',
      wrong_password: 'You entered the wrong password',
      user_not_found: 'User not found',
      email_already_in_use: 'Email already in use',
      users: [
        {
          id: 1,
          name: 'Ivan',
          githubUrl: 'https://github.com/IvanPratasevich',
          imageUrl: 'https://avatars.githubusercontent.com/u/85807287?v=4',
          description: '',
          badges: ['developer', 'team lead'],
          colors: ['cyan', 'red'],
          github: `Ivan's GitHub`,
        },

        {
          id: 2,
          name: 'Vitali',
          githubUrl: 'https://github.com/vitalisavelyev',
          imageUrl: 'https://avatars.githubusercontent.com/u/79810929?v=4',
          description: '',
          badges: ['developer', 'software architect'],
          colors: ['cyan', 'yellow'],
          github: `Vitaliy's GitHub`,
        },

        {
          id: 3,
          name: 'Sergey',
          githubUrl: 'https://github.com/sergey-lesnevskiy',
          imageUrl: 'https://avatars.githubusercontent.com/u/78030028?v=4',
          description: '',
          badges: ['developer', 'firebase'],
          colors: ['cyan', 'orange'],
          github: `Sergey's GitHub`,
        },
      ],
      app_description:
        'GraphiQL is a user-friendly IDE for testing GraphQL APIs. It provides a graphical interface for constructing and executing queries, mutations, and subscriptions in real-time. GraphiQL supports syntax highlighting, error highlighting, and code snippets, making it easy to work with GraphQL APIs. Overall, GraphiQL streamlines the process of testing and debugging GraphQL APIs, saving developers time and effort. One of the key benefits of GraphiQL is its ability to provide a schema documentation for the GraphQL API. This documentation can be viewed directly in the GraphiQL interface, allowing developers to quickly and easily understand the structure and capabilities of the API. This can be especially helpful when working with large or complex APIs, where understanding the schema can be a challenge. Another advantage of GraphiQL is its support for multiple programming languages and frameworks. It can be used with JavaScript, Python, Ruby, Java, and many other languages and frameworks, making it a versatile tool for developers working in a wide range of environments. GraphiQL also supports collaborative development workflows, allowing multiple developers to work on the same API at the same time. This can be achieved through the use of version control systems like Git, or by using tools like Apollo Studio, which provides a shared workspace for GraphQL development. In summary, GraphiQL is a powerful and versatile tool that simplifies the process of working with GraphQL APIs. Its user-friendly interface, advanced features, and flexibility make it an essential tool for developers who want to work more efficiently and effectively with GraphQL APIs.',
      ytb_video: 'YouTube Video',
      includes_number: 'Includes number',
      includes_lowercase_letter: 'Includes lowercase letter',
      includes_uppercase_letter: 'Includes uppercase letter',
      includes_special_symbol: 'Includes special symbol',
      your_password: 'Your password',
      includes_at_least_8_characters: 'Includes at least 8 characters',
      team_member_description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
});

export default i18next;
