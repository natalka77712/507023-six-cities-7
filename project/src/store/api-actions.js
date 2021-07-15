import {ActionCreator} from './action';
import {APIRoute, AuthorizationStatus, Path} from '../const';
import {adaptOffersToClient, adaptReviewToClient} from '../utils';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.fetchOffers(data.map(adaptOffersToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.login(email)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export const fetchRoomData = (id) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.fetchRoom(adaptOffersToClient(data))))
    .catch(() => {
      dispatch(ActionCreator.redirectToRoute(Path.ERROR));
    });
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
    .then(({data}) => dispatch(ActionCreator.fetchOffersNearby(data.map(adaptOffersToClient))))
);
export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.fetchReviews(data.map(adaptReviewToClient))))
);

export const postReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`,
    {comment, rating},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .then(({data}) => dispatch(ActionCreator.fetchReviews(data.map(adaptReviewToClient))))
);
