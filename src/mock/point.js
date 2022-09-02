import { getRandomInteger, getRandomArrayElement, counter } from '../util.js';
import { generateDestinations } from './destinations.js';
import { generateOffersGroups } from './offers.js';
import dayjs from 'dayjs';
import { POINT_TYPES } from '../const.js';

const PointDate = {
  MIN_GAP: 1,
  MINUTE_GAP: 59,
  HOUR_GAP: 3,
  DAY_GAP: 14
};

const generateBasePrice = () => {
  const randomInteger = getRandomInteger(5, 35);
  return randomInteger * 100;
};

const generateRandomDate = () => ({
  minute: getRandomInteger(PointDate.MIN_GAP, PointDate.MINUTE_GAP),
  hour: getRandomInteger(PointDate.MIN_GAP, PointDate.HOUR_GAP),
  day: getRandomInteger(PointDate.MIN_GAP, PointDate.DAY_GAP)
});

const generateDateFrom = ({minute, hour, day}) =>
  dayjs()
    .add(minute, 'minute')
    .add(hour, 'hour')
    .add(day, 'day')
    .format();

const generateDateTo = (dateFrom, {minute, hour}) =>
  dayjs(dateFrom)
    .add(minute, 'minute')
    .add(hour, 'hour')
    .format();

const generateDestinationId = (destinations) => {
  if (destinations.length === 1) {
    return destinations[0].id;
  }

  const destination = getRandomArrayElement(destinations);

  return destination.id;
};

const generatePointId = counter();

const offersGroups = generateOffersGroups();

const generateType = (types) => getRandomArrayElement(types);

const type = generateType(POINT_TYPES);

const getOffersOfType = () => {
  for (let i = 0; i < offersGroups.length; i++) {
    if (offersGroups[i]['type'] === type) {
      return offersGroups[i];
    }
  }
};

const offersOfType = getOffersOfType();

const getOffersIds = () => {
  const ids = [];
  offersOfType.offers.forEach((offer)=> {ids.push(offer.id);});
  return ids;
};

export const generatePoint = () => {
  const randomDate = generateRandomDate;
  const dateFrom = generateDateFrom(randomDate);
  const dateTo = generateDateTo(dateFrom, randomDate);
  const offers = getOffersIds();
  return ({
    'basePrice': generateBasePrice(),
    dateFrom,
    dateTo,
    'destination': generateDestinationId(generateDestinations),
    'id': String(generatePointId()),
    'type': offersOfType.type,
    offers,
  });
};
