import dayjs from 'dayjs';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// Функция для получения случайного элемента массива
const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

//функция для перемешивания массива
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//функция для получения нового перемешенного массива
function getNewArray(array) {
  const newArray = shuffleArray(array).slice(
    getRandomInteger(0, array.length - 1)
  );
  return newArray;
}

//счетчик
const counter = () => {
  let count = 1;
  return () => count++;
};

const humanizeDate = () => dayjs().format();

export {getRandomInteger, getRandomArrayElement, getNewArray, counter};
