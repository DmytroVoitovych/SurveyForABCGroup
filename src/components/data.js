const testimageman = new URL(
  '../assets/img/mainPageImg/pictureoptimised/testimagemanjpg2x.jpg',
  import.meta.url
).href
const pyramid = new URL('../assets/img/mainPageImg/pictureoptimised/pyramid.jpg', import.meta.url)
  .href
const star = new URL('../assets/img/mainPageImg/pictureoptimised/star.jpg', import.meta.url).href

export const testQuestions = [
  {
    question: 'Ваш пол:',
    questionStyle: {
      marginBottom: '45px',
      marginTop: '110px'
    },
    answers: ['Мужчина', 'Женщина']
  },
  {
    question: 'Укажите ваш возраст:',
    questionStyle: {
      marginBottom: '51px',
      marginTop: '65px'
    },
    answers: ['До 18', 'От 18 до 28', 'от 29 до 35', 'От 36']
  },
  {
    question: 'Выберите лишнее:',
    questionStyle: {
      marginBottom: '45px',
      marginTop: '42px'
    },
    answers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина']
  },
  {
    question: 'Продолжите числовой ряд:\n 18  20  24  32',
    questionStyle: {
      marginBottom: '36px',
      marginTop: '28px'
    },
    answers: ['62', '48', '74', '57', '60', '77']
  },
  {
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    questionStyle: {
      marginBottom: '32px',
      marginTop: '32px'
    },
    answers: [
      '#a8a8a8',
      '#0000a9',
      '#00a701',
      '#f60100',
      '#fdff19',
      '#a95403',
      '#000000',
      '#850068',
      '#46b2ac'
    ],
    hex: true
  },
  {
    question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    questionStyle: {
      marginBottom: '27px',
      marginTop: '17px'
    },
    answers: [
      '#a8a8a8',
      '#46b2ac',
      '#a95403',
      '#00a701',
      '#000000',
      '#f60100',
      '#850068',
      '#fdff19',
      '#0000a9'
    ],
    hex: true
  },
  {
    question: 'Какой из городов лишний?',
    questionStyle: {
      marginBottom: '27px',
      marginTop: '37px'
    },
    answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
  },
  {
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    questionStyle: {
      marginBottom: '25px',
      marginTop: '17px'
    },
    answers: ['1', '2', '3', '4'],
    hex: true,
    imageName: testimageman,
    imageStyle: {
      maxWidth: '185px',
      maxHeight: '235px',
      marginBottom: '23px'
    },
    imageAlt: 'Human figures'
  },
  {
    question: 'Вам привычнее и важнее:',
    questionStyle: {
      marginBottom: '30px',
      marginTop: '44px'
    },
    answers: [
      `Наслаждаться
каждой минутой 
проведенного времени`,
      `Быть устремленными 
мыслями в будущее`,
      `Учитывать в ежедневной 
практике прошлый опыт`
    ],
    listStyle: true
  },
  {
    question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
    questionStyle: {
      marginBottom: '17px',
      marginTop: '24px'
    },
    answers: ['Оно остроконечное', 'Оно устойчиво', 'оно-находится в состоянии равновесия'],
    imageName: pyramid,
    imageStyle: {
      maxWidth: '173px',
      maxHeight: '115px',
      marginBottom: '17px'
    },
    imageAlt: 'Pyramid'
  },
  {
    question: 'Вставьте подходящее число',
    questionStyle: {
      marginBottom: '15px',
      marginTop: '33px'
    },
    answers: ['34', '36', '53', '44', '66', '42'],
    imageName: star,
    imageStyle: {
      maxWidth: '228px',
      maxHeight: '207px',
      marginBottom: '47px'
    },
    imageAlt: 'Star',
    hex: true
  }
]
