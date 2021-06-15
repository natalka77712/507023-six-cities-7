import PropTypes, {bool, number, string} from 'prop-types';


export default PropTypes.shape({
  comment: string.isRequired,
  date: string.isRequired,
  id: number.isRequired,
  rating: number.isRequired,
  user: PropTypes.shape({
    avatarUrl: string.isRequired,
    id: number.isRequired,
    isPro: bool.isRequired,
    name: string.isRequired,
  }),
}).isRequired;
