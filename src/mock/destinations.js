import { getRandomArrayElement, getRandomInteger, counter } from '../util.js';

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Cras aliquet varius magna, non porta ligula feugiat eget. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Fusce tristique felis at fermentum pharetra. Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam id orci ut lectus varius viverra. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. In rutrum ac purus sit amet tempus.'
];

const citiesList = [
  'Geneva',
  'Amsterdam',
  'Chamonix',
  'Tokyo',
  'Vladivostok'
];

const generateDescription = (arr) => getRandomArrayElement(arr);

const generateCity = (cities) => getRandomArrayElement(cities);

const generatePictures = () => {
  const pictures = [];
  const amount = getRandomInteger(1, 3);

  for (let i = 0; i < amount; i++) {
    const picture = {
      src: `http://picsum.photos/248/152?r=${getRandomInteger(1, 100)}`,
      description: generateDescription(descriptions),
    };
    pictures.push(picture);
  }
  return pictures;
};

const generateDestination = (id) => ({
  id,
  'description': generateDescription(descriptions),
  'name': generateCity(citiesList),
  'pictures': generatePictures(),
});

const getDestinationId = counter();

const generateDestinations = () => {
  const destinations = [];
  const amount = getRandomInteger(1, 5);

  for (let i = 0; i < amount; i++) {
    const id = getDestinationId();
    const destination = generateDestination(id);
    destinations.push(destination);
  }
  return destinations;
};

export {generateDestinations};
