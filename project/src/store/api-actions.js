import {APIRoute, AuthorizationStatus, Path} from '../const';
import {adaptOffersToClient, adaptReviewToClient, adaptUserToClient} from '../adapter/adapter';
import {
  loadOffers,
  loadRoom,
  redirectToRoute,
  requireAuthorization,
  loadReviews, loadOffersNearby, setUserData, setLogOut
} from './action';

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

export const fetchRoomData = (id) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadRoom(adaptOffersToClient(data))))
    .catch(() => {
      dispatch(redirectToRoute(Path.ERROR));
    });
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
    .then(({data}) => dispatch(loadOffersNearby(data.map(adaptOffersToClient))))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
);

export const postReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`,
    {comment, rating},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
);
