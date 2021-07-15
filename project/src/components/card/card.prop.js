import PropTypes, { bool, number, string} from 'prop-types';


export default PropTypes.shape({
  id: number.isRequired,
  title: string.isRequired,
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  type: string.isRequired,
  imgPreview: string.isRequired,
  price: number.isRequired,
  isPremium: bool.isRequired,
  rating: number.isRequired,
  isFavorite: bool.isRequired,
}).isRequired;
