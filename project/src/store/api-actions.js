import {ActionCreator} from './action';
import {APIRoute, AuthorizationStatus} from '../const';
import {adaptToClient} from '../utils';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.fetchOffers(data.map(adaptToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(APIRoute.LOGIN, {email, password})
//     .then(({data}) => localStorage.setItem('token', data.token))
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );
//
// export const logout = () => (dispatch, _getState, api) => (
//   api.delete(APIRoute.LOGOUT)
//     .then(() => localStorage.removeItem('token'))
//     .then(() => dispatch(ActionCreator.logout()))
// );
