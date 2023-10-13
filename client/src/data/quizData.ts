import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 1,
    title: 'Сериалы и фильмы',
    questions: [
      {
        id: 1,
        question:
          'Фильм, в котором мужу Анжелины Джоли не терпится узнать что в коробке',
        answer: 'Семь',
        topicId: 1,
        points: 200,
      },
      {
        id: 2,
        question: 'Каким цветом светится отвертка 11 Доктора?',
        answer: 'Зеленый',
        topicId: 1,
        points: 400,
      },
      {
        id: 3,
        question:
          'Какую еду Мстители идут есть после битвы за Нью-Йорк в первом фильме о Мстителях?',
        answer: 'Шаурма',
        topicId: 1,
        points: 600,
      },
      {
        id: 4,
        question:
          'В сериале "Как я встретил вашу маму", где Тед делает татуировку?',
        answer: 'На пояснице',
        topicId: 1,
        points: 800,
      },
      {
        id: 5,
        question: 'В какой сфере работает Чендлер Бинг из сериала "Друзья"?',
        answer: 'Статистический анализ и реконфигурация данных',
        topicId: 1,
        points: 1000,
      },
    ],
  },
  {
    id: 2,
    title: 'География',
    questions: [
      {
        id: 6,
        question:
          'Её с собой берёт геолог, турист, водитель, археолог, Даша-следопыт?',
        answer: 'карта',
        topicId: 2,
        points: 200,
      },
      {
        id: 7,
        question:
          'Вы стоите на испанской лестнице. В каком городе вы находитесь?',
        answer: 'Рим',
        topicId: 2,
        points: 400,
      },
      {
        id: 8,
        question: 'На каком материке земного шара нет рек?',
        answer: 'Антарктида',
        topicId: 2,
        points: 600,
      },
      {
        id: 9,
        question: 'Столица штата Нью-Йорк?',
        answer: 'Олбани',
        topicId: 2,
        points: 800,
      },
      {
        id: 10,
        question: 'В какой стране есть понятие валового национального счастья?',
        answer: 'Бутан',
        topicId: 2,
        points: 1000,
      },
    ],
  },
  {
    id: 3,
    title: 'Мемопедия',
    questions: [
      {
        id: 11,
        question: 'Нельзя так просто взять и войти. Куда?',
        answer: 'Мордор',
        topicId: 3,
        points: 200,
      },
      {
        id: 12,
        question: 'Кто изображен на картинке с подписью ЪУЪ?',
        answer: 'Кот',
        topicId: 3,
        points: 400,
      },
      {
        id: 13,
        question: 'Продолжите ауф-цитату - Не важно кто, важно...',
        answer: 'кто',
        topicId: 3,
        points: 600,
      },
      {
        id: 14,
        question: 'Сколько рублей попросит у тебя Алла Борисовна?',
        answer: '5',
        topicId: 3,
        points: 800,
      },
      {
        id: 15,
        question: 'Сколько котов на меме про продование рыбов?',
        answer: '8',
        topicId: 3,
        points: 1000,
      },
    ],
  },
  {
    id: 4,
    title: 'О, вы из англии',
    questions: [
      {
        id: 16,
        question: 'Which Tasmanian marsupial is known for its temper?',
        answer: 'Tasmanian devil',
        topicId: 4,
        points: 200,
      },
      {
        id: 17,
        question: 'A group of crows is called a...',
        answer: 'murder',
        topicId: 4,
        points: 400,
      },
      {
        id: 18,
        question:
          'In the state of Georgia, it’s illegal to eat what with a fork?',
        answer: 'Fried chicken',
        topicId: 4,
        points: 600,
      },
      {
        id: 19,
        question:
          'What TV series showed the first interracial kiss on American network television?',
        answer: 'Star Trek',
        topicId: 4,
        points: 800,
      },
      {
        id: 20,
        question: 'What is a group of pandas known as?',
        answer: 'Embarrassment',
        topicId: 4,
        points: 1000,
      },
    ],
  },
  {
    id: 5,
    title: 'Звездные воины',
    questions: [
      {
        id: 21,
        question: 'Чью ДНК использовали для создания армии клонов?',
        answer: 'Бобба Фетт',
        topicId: 5,
        points: 200,
      },
      {
        id: 22,
        question: 'Кто озвучил Дарта Вейдера?',
        answer: 'Джеймс Эрл Джонс',
        topicId: 5,
        points: 400,
      },
      {
        id: 23,
        question: 'Какого цвета меч Йоды?',
        answer: 'Зеленый',
        topicId: 5,
        points: 600,
      },
      {
        id: 24,
        question: 'Сколько лет было Падме, когда ее избрали королевой Набу?',
        answer: '14',
        topicId: 5,
        points: 800,
      },
      {
        id: 25,
        question: 'Кто выстрелил первым?',
        answer: 'Хан Соло',
        topicId: 5,
        points: 1000,
      },
    ],
  },
  {
    id: 6,
    title: 'Футбол',
    questions: [
      {
        id: 26,
        question: 'В каком году прошел первый ЧЕ?',
        answer: '1960',
        topicId: 6,
        points: 200,
      },
      {
        id: 27,
        question:
          'Форму этого клуба шили из дешевой ткани, из которой делали матрасы. Из-за этого за ними закрепилось это название.',
        answer: 'Матрасники',
        topicId: 6,
        points: 400,
      },
      {
        id: 28,
        question: 'Элтон Джон был владельцем этого клуба дважды',
        answer: 'Уотфорд',
        topicId: 6,
        points: 600,
      },
      {
        id: 29,
        question:
          'Правда или ложь: Криштиану Роналду сыграл 27 игр в ЛЧ прежде чем забить свой первый гол',
        answer: 'Правда',
        topicId: 6,
        points: 800,
      },
      {
        id: 30,
        question: 'Лучший игрок в истории вселенной?',
        answer: 'Андрес Иньеста',
        topicId: 6,
        points: 1000,
      },
    ],
  },
];
