/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question:

            "Фильм, в котором мужу Анжелины Джоли не терпится узнать что в коробке",
          answer: "Семь",
          topic_id: 1,
          points: 200,
        },
        {
          question: "Каким цветом светится отвертка 11 Доктора?",
          answer: "Зеленый",
          topic_id: 1,
          points: 400,
        },
        {
          question:
            "Какую еду Мстители идут есть после битвы за Нью-Йорк в первом фильме о Мстителях?",
          answer: "Шаурма",
          topic_id: 1,
          points: 600,
        },
        {
          question:
            'В сериале "Как я встретил вашу маму", где Тед делает татуировку?',
          answer: "На пояснице",
          topic_id: 1,
          points: 800,
        },
        {
          question: 'В какой сфере работает Чендлер Бинг из сериала "Друзья"?',
          answer: "Статистический анализ и реконфигурация данных",
          topic_id: 1,
          points: 1000,
        },
        {
          question:
            "Её с собой берёт геолог, турист, водитель, археолог, Даша-следопыт?",
          answer: "карта",
          topic_id: 2,
          points: 200,
        },
        {
          question:
            "Вы стоите на испанской лестнице. В каком городе вы находитесь?",
          answer: "Рим",
          topic_id: 2,
          points: 400,
        },
        {
          question: "На каком материке земного шара нет рек?",
          answer: "Антарктида",
          topic_id: 2,
          points: 600,
        },
        {
          question: "Столица штата Нью-Йорк?",
          answer: "Олбани",
          topic_id: 2,
          points: 800,
        },
        {
          question:
            "В какой стране есть понятие валового национального счастья?",
          answer: "Бутан",
          topic_id: 2,
          points: 1000,
        },
        {
          question: "Нельзя так просто взять и войти. Куда?",
          answer: "Мордор",
          topic_id: 3,
          points: 200,
        },
        {
          question: "Кто изображен на картинке с подписью ЪУЪ?",
          answer: "Кот",
          topic_id: 3,
          points: 400,
        },
        {
          question: "Продолжите ауф-цитату - Не важно кто, важно...",
          answer: "кто",
          topic_id: 3,
          points: 600,
        },
        {
          question: "Сколько рублей попросит у тебя Алла Борисовна?",
          answer: "5",
          topic_id: 3,
          points: 800,
        },
        {
          question: "Сколько котов на меме про продование рыбов?",
          answer: "8",
          topic_id: 3,
          points: 1000,
        },
        {
          question: "Which Tasmanian marsupial is known for its temper?",
          answer: "Tasmanian devil",
          topic_id: 4,
          points: 200,
        },
        {
          question: "A group of crows is called a...",
          answer: "murder",
          topic_id: 4,
          points: 400,
        },
        {
          question:
            "In the state of Georgia, it’s illegal to eat what with a fork?",
          answer: "Fried chicken",
          topic_id: 4,
          points: 600,
        },
        {
          question:
            "What TV series showed the first interracial kiss on American network television?",
          answer: "Star Trek",
          topic_id: 4,
          points: 800,
        },
        {
          question: "What is a group of pandas known as?",
          answer: "Embarrassment",
          topic_id: 4,
          points: 1000,
        },
        {
          question: "Чью ДНК использовали для создания армии клонов?",
          answer: "Бобба Фетт",
          topic_id: 5,
          points: 200,
        },
        {
          question: "Кто озвучил Дарта Вейдера?",
          answer: "Джеймс Эрл Джонс",
          topic_id: 5,
          points: 400,
        },
        {
          question: "Какого цвета меч Йоды?",
          answer: "Зеленый",
          topic_id: 5,
          points: 600,
        },
        {
          question: "Сколько лет было Падме, когда ее избрали королевой Набу?",
          answer: "14",
          topic_id: 5,
          points: 800,
        },
        {
          question: "Кто выстрелил первым?",
          answer: "Хан Соло",
          topic_id: 5,
          points: 1000,
        },
        {
          question: "В каком году прошел первый ЧЕ?",
          answer: "1960",
          topic_id: 6,
          points: 200,
        },
        {
          question:
            "Форму этого клуба шили из дешевой ткани, из которой делали матрасы. Из-за этого за ними закрепилось это название.",
          answer: "Матрасники",
          topic_id: 6,
          points: 400,
        },
        {
          question: "Элтон Джон был владельцем этого клуба дважды",
          answer: "Уотфорд",
          topic_id: 6,
          points: 600,
        },
        {
          question:
            "Правда или ложь: Криштиану Роналду сыграл 27 игр в ЛЧ прежде чем забить свой первый гол",
          answer: "Правда",
          topic_id: 6,
          points: 800,
        },
        {
          question: "Лучший игрок в истории вселенной?",
          answer: "Андрес Иньеста",
          topic_id: 6,

          points: 1000,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
