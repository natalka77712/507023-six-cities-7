import {
  ActionType,
  changeCity,
  loadErrorMessage,
  loadFavoritesOffers, loadOffers, loadOffersNearby, loadReviews, loadRoom,
  redirectToRoute,
  requireAuthorization, setLogOut,
  setSort, setUserData, updateOffer
} from './action';


describe('Actions', () => {
  it('Action creator for incrementing city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    };

    expect(changeCity('Paris')).toEqual(expectedAction);
  });

  it('Action creator for incrementing sort returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_SORT,
      payload: 'Popular',
    };

    expect(setSort('Popular')).toEqual(expectedAction);
  });

  it('Action creator for requiring authorization returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requireAuthorization('AUTH')).toEqual(expectedAction);
  });

  it('action creator for setting user data returns correct action', () => {
    const user = {
      id: 1,
      username: 'Oliver',
      email: 'Oliver.conner@gmail.com',
      password: 123,
    };

    const expectedAction = {
      type: ActionType.SET_USER_DATA,
      payload: user,
    };

    expect(setUserData(user)).toEqual(expectedAction);
  });

  it('action creator for logging out returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_LOG_OUT,
    };

    expect(setLogOut()).toEqual(expectedAction);
  });

  it('Action creator for redirecting to route returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/',
    };

    expect(redirectToRoute('/')).toEqual(expectedAction);
  });

  it('Action creator for loading error message returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_ERROR_MESSAGE,
      payload: 'Connection error',
    };
    expect(loadErrorMessage('Connection error')).toEqual(expectedAction);
  });

  it('action creator for loading favorites, returns correct action', () => {
    const offers = [
      {
        bedrooms: 3,
        city: 'Amsterdam',
        id: 1,
        isFavorite: false,
        price: 748,
        title: 'This is a place for dreamers to reset',
      },
      {
        bedrooms: 2,
        city: 'Paris',
        id: 2,
        isFavorite: true,
        price: 206,
        title: 'Quiet house Near of everything',
      },
      {
        bedrooms: 5,
        city: 'Paris',
        id: 3,
        isFavorite: false,
        price: 140,
        title: 'Large luxury house in a quiet place',
      },
    ];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES_OFFERS,
      payload: offers,
    };

    expect(loadFavoritesOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for loading offers nearby, returns correct action', () => {
    const offersNearby = [
      {
        bedrooms: 3,
        city: 'Amsterdam',
        id: 1,
        isFavorite: false,
        price: 748,
        title: 'This is a place for dreamers to reset',
      },
      {
        bedrooms: 2,
        city: 'Paris',
        id: 2,
        isFavorite: true,
        price: 206,
        title: 'Quiet house Near of everything',
      },
      {
        bedrooms: 5,
        city: 'Paris',
        id: 3,
        isFavorite: false,
        price: 140,
        title: 'Large luxury house in a quiet place',
      },
    ];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offersNearby,
    };

    expect(loadOffersNearby(offersNearby)).toEqual(expectedAction);
  });

  it('action creator for loading offers returns correct action', () => {
    const offers = [
      {
        bedrooms: 3,
        city: 'Amsterdam',
        id: 1,
        isFavorite: false,
        price: 748,
        title: 'This is a place for dreamers to reset',
      },
      {
        bedrooms: 2,
        city: 'Paris',
        id: 2,
        isFavorite: true,
        price: 206,
        title: 'Quiet house Near of everything',
      },
      {
        bedrooms: 5,
        city: 'Paris',
        id: 3,
        isFavorite: false,
        price: 140,
        title: 'Large luxury house in a quiet place',
      },
    ];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for loading offer, returns correct action', () => {
    const room = {
      bedrooms: 3,
      city: 'Amsterdam',
      id: 1,
      isFavorite: false,
      price: 748,
      title: 'This is a place for dreamers to reset',
    };
    const expectedAction = {
      type: ActionType.LOAD_ROOM,
      payload: room,
    };

    expect(loadRoom(room)).toEqual(expectedAction);
  });

  it('action creator for updating offer returns correct action', () => {
    const offer = {
      bedrooms: 3,
      city: 'Amsterdam',
      id: 1,
      isFavorite: false,
      price: 748,
      title: 'This is a place for dreamers to reset',
    };
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: offer,
    };

    expect(updateOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for loading reviews returns correct action', () => {
    const reviews = [
      {
        rating: 5,
        text: 'Bathed in the nature. Completely unplugged. Unforgettable.',
      },
      {
        rating: 4,
        text: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(loadReviews(reviews)).toEqual(expectedAction);
  });
});
