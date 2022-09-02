import { getRandomArrayElement, getRandomInteger } from '../util.js';
import { POINT_TYPES } from '../const.js';

const titles = [
  'Аренда машины',
  'Поздний выезд',
  'Добавить завтрак',
  'Добавить кровать',
  'Нанять гида',
  'Нанять гида, который говорит на вышем языке',
  'Трансфер из аэропорта в отель'
];

const generateOfferTitle = (titlesList) => getRandomArrayElement(titlesList);

const generateOfferPrice = () => getRandomInteger(30, 200);

const generateOffer = (id) => ({
  id,
  title: generateOfferTitle(titles),
  price: generateOfferPrice(),
});

const generateOffersOfType = (amount) => {
  const offers = [];
  for (let i = 1; i < amount; i++) {
    const offer = generateOffer(i);
    offers.push(offer);
  }
  return offers;
};

const generateOffersGroups = () => {
  const groups = [];
  for (const type of POINT_TYPES) {
    const amount = getRandomInteger(1, 5);
    const group = {
      type: type,
      offers: generateOffersOfType(amount),
    };
    groups.push(group);
  }
  return groups;
};

export {generateOffersGroups};
