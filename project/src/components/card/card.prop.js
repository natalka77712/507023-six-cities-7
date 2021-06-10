import PropTypes, {array, bool, number, string} from 'prop-types';


export default PropTypes.shape({
  id: number.isRequired,
  title: string.isRequired,
  type: string.isRequired,
  imgPreview: array.isRequired,
  price: number.isRequired,
  isPremium: bool.isRequired,
  rating: number.isRequired,
  isFavorite: bool.isRequired,
}).isRequired;
