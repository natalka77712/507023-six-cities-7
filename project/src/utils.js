import {offers} from './mocks/offers';

const MAX_STARS_AMOUNT = 5;

export const formatDate = (date) => {
  const reviewDate = new Date(date);

  return reviewDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
};

export const countRating = (rate) => `${rate / MAX_STARS_AMOUNT * 100}%`;

function getShuffledArray(array) {
  const result = [], source = array.concat([]);

  while (source.length) {
    const index = Math.floor(Math.random() * source.length);
    result.push(source[index]);
    source.splice(index, 1);
  }

  return result;
}

export const nearPlaces = getShuffledArray(offers).slice(1);
