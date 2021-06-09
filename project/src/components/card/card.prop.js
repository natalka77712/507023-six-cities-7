import PropTypes, {array, arrayOf, bool, number, shape, string} from 'prop-types';


export default PropTypes.shape({
  offers: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      type: string.isRequired,
      imgPreview: array.isRequired,
      price: number.isRequired,
      isPremium: bool.isRequired,
      rating: number.isRequired,
    }),
  ),
}).isRequired;
