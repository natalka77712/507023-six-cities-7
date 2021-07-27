import {APIRoute, AuthorizationStatus, Path} from '../const';
import {adaptOffersToClient, adaptReviewToClient, adaptUserToClient} from '../adapter/adapter';
import {
  loadOffers,
  loadRoom,
  redirectToRoute,
  requireAuthorization,
  loadReviews, loadOffersNearby, setUserData, setLogOut, loadFavoritesOffers, updateOffer, loadErrorMessage
} from './action';
import {sortDateComments} from '../utils';
import {submitFormError} from '../api/api';
import {NameSpace} from './root-reducer';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map((offer) => adaptOffersToClient(offer)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUserData(adaptUserToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(setUserData(adaptUserToClient(data)));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(setLogOut()))
    .then(() => dispatch(redirectToRoute(Path.MAIN)))
);

export const fetchRoomData = (id) => (dispatch, _getState, api) =>  (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadRoom(adaptOffersToClient(data))))
    .catch(() => {
      dispatch(redirectToRoute(Path.ERROR));
    })
);

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
    .then(({data}) => dispatch(loadOffersNearby(data.map(adaptOffersToClient))))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      const sortedComments = data.sort(sortDateComments);
      dispatch(loadReviews(sortedComments.map((adaptReviewToClient))));
    })
);

export const postReview = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => {
      const sortedComments = data.sort(sortDateComments);
      dispatch(loadReviews(sortedComments.map((commentItem) => adaptReviewToClient(commentItem))));
    })
    .catch((err) => {
      submitFormError(
        err, () => {
          dispatch(loadErrorMessage('Connection error.'));
        },
      );
    })
);

export const fetchFavoritesOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(loadFavoritesOffers(data.map(adaptOffersToClient))))
    .catch(() => dispatch(loadFavoritesOffers([])))
);

export const setFavorites = ({id, status}) => (dispatch, getState, api) => {
  const auth = getState()[NameSpace.AUTHORIZATION].authorizationStatus;

  if (auth !== AuthorizationStatus.AUTH) {
    dispatch(redirectToRoute(Path.LOGIN));
  } else {
    api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
      .then(({data}) => dispatch(updateOffer(adaptOffersToClient(data))))
      .catch(() => {
      });
  }
};
