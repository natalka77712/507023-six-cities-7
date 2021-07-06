import PropTypes, { bool, number, string} from 'prop-types';


export default PropTypes.shape({
  id: number.isRequired,
  title: string.isRequired,
  city: PropTypes.shape(
    {
      location: PropTypes.objectOf(PropTypes.number.isRequired),
      name: PropTypes.string.isRequired,
    },
  ),
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  type: string.isRequired,
  imgPreview: string.isRequired,
  price: number.isRequired,
  isPremium: bool.isRequired,
  rating: number.isRequired,
  isFavorite: bool.isRequired,
}).isRequired;
