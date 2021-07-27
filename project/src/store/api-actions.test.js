import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../api/api';
import {
  checkAuth, fetchFavoritesOffers,
  fetchOffers,
  fetchOffersNearby,
  fetchReviews,
  fetchRoomData,
  login,
  logout,
  postReview
} from './api-actions';
import {APIRoute, AuthorizationStatus, Path} from '../const';
import {ActionType} from './action';
import {adaptOffersToClient, adaptReviewToClient, adaptUserToClient} from '../adapter/adapter';

let api = null;

const fakeReview = {
  comment: 'The room was quite spacious, comfortable bed, staff was super helpful! Location is great.',
  date: '2020-07-13T11:22:13.375Z',
  id: 1,
  rating: 5,
  user: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 1,
    isPro: true,
    name: 'Angelina',
  },
};

const fakeOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 48.864716,
      longitude: 2.3,
      zoom: 10,
    },
    name: 'Paris',
  },
  description:
    'Big spasious flat is situated in the heart of the city centre within walking distance of museums, the main shopping area and night life. You will find plenty of cafés and restaurants in the area.',
  goods: [
    'Air conditioning',
    'Wi-Fi',
    'Towels',
    'Heating',
    'Cable TV',
    'Fridge',
  ],
  host: {
    avatarUrl: 'img/1.png',
    id: 1,
    isPro: true,
    name: 'Corine',
  },
  id: 1,
  images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/room.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 48.73564787,
    longitude: 2.34556,
    zoom: 8,
  },
  'max_adults': 5,
  'preview_image': 'img/test.jpg',
  price: 300,
  rating: 5,
  title: 'Central apartment',
  type: 'apartment',
};

const userData = {
  'avatar_url': 'img/1.png',
  email: 'Oliver.conner@gmail.com',
  id: 1,
  'is_pro': true,
  name: 'Oliver.conner',
  token: 'nbfA8gWdfiOqwEfd2s',
};

const fakeUser = {
  avatarUrl: 'img/1.png',
  email: 'Oliver.conner@gmail.com',
  id: 1,
  isPro: false,
  name: 'Oliver.conner',
};

const comment = 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.';
const rating = 5;

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {
    });
  });

  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [fakeOffer]);

    return offersLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [adaptOffersToClient(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET checkAuth', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, userData);

    return checkAuthLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_DATA,
          payload: adaptUserToClient(userData),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login({login: fakeUser.email, password: '123' });

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, userData);

    return loginLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_DATA,
          payload: adaptUserToClient(userData),
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, jest.fn(() => {}), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.SET_LOG_OUT,
        });

        expect(dispatch).nthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: Path.MAIN,
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const roomLoader = fetchRoomData(id);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}`)
      .reply(200, fakeOffer);

    return roomLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ROOM,
          payload: adaptOffersToClient(fakeOffer),
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const offersNearbyLoader = fetchOffersNearby(id);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
      .reply(200, [fakeOffer]);

    return offersNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: [adaptOffersToClient(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const reviewsLoader = fetchReviews(fakeId);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${fakeId}`)
      .reply(200, [fakeReview]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptReviewToClient(fakeReview)],
        });
      });
  });

  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 5;
    const reviewSender = postReview(id, {comment: comment, rating: rating});

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
      .reply(200, [fakeReview]);

    return reviewSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptReviewToClient(fakeReview)],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavoritesOffers();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [fakeOffer]);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES_OFFERS,
          payload: [adaptOffersToClient(fakeOffer)],
        });

      });
  });
});
