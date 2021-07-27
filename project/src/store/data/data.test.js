import {data} from './data';
import {ActionType} from '../action';

const offers = [
  {'city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'preview_image':'https://7.react.pages.academy/static/hotel/8.jpg','images':['https://7.react.pages.academy/static/hotel/15.jpg','https://7.react.pages.academy/static/hotel/20.jpg'],'title':'The Joshua Tree House','is_favorite':false,'is_premium':false,'rating':3.5,'type':'house','bedrooms':2,'max_adults':8,'price':125,'goods':['Baby seat','Breakfast','Laptop friendly workspace','Towels','Air conditioning','Fridge','Washer'],'host':{'id':25,'name':'Angelina','is_pro':true,'avatar_url':'img/avatar-angelina.jpg'},'description':'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!','location':{'latitude':48.85761,'longitude':2.358499,'zoom':16},'id':2},
  [{'id':1,'user':{'id':16,'is_pro':true,'name':'Mollie','avatar_url':'https://7.react.pages.academy/static/avatar/7.jpg'},'rating':4,'comment':'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.','date':'2021-06-21T16:51:35.215Z'},{'id':2,'user':{'id':13,'is_pro':false,'name':'Zak','avatar_url':'https://7.react.pages.academy/static/avatar/4.jpg'},'rating':4,'comment':'Bathed in the nature. Completely unplugged. Unforgettable.','date':'2021-06-21T16:51:35.215Z'}],
  {'city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'preview_image':'https://7.react.pages.academy/static/hotel/16.jpg','images':['https://7.react.pages.academy/static/hotel/4.jpg','https://7.react.pages.academy/static/hotel/7.jpg'],'title':'The Pondhouse - A Magical Place','is_favorite':false,'is_premium':false,'rating':3.1,'type':'apartment','bedrooms':3,'max_adults':6,'price':118,'goods':['Breakfast','Fridge','Towels','Laptop friendly workspace','Washer','Baby seat','Air conditioning'],'host':{'id':25,'name':'Angelina','is_pro':true,'avatar_url':'img/avatar-angelina.jpg'},'description':'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.','location':{'latitude':48.84761,'longitude':2.356499,'zoom':16},'id':59},{'city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'preview_image':'https://7.react.pages.academy/static/hotel/17.jpg','images':['https://7.react.pages.academy/static/hotel/6.jpg','https://7.react.pages.academy/static/hotel/5.jpg'],'title':'The house among olive ','is_favorite':false,'is_premium':false,'rating':3.1,'type':'house','bedrooms':4,'max_adults':9,'price':336,'goods':['Baby seat','Dishwasher','Air conditioning','Coffee machine','Laptop friendly workspace','Fridge','Washer','Breakfast','Towels','Washing machine'],'host':{'id':25,'name':'Angelina','is_pro':true,'avatar_url':'img/avatar-angelina.jpg'},'description':'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.','location':{'latitude':48.865610000000004,'longitude':2.350499,'zoom':16},'id':25},{'city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'preview_image':'https://7.react.pages.academy/static/hotel/2.jpg','images':['https://7.react.pages.academy/static/hotel/6.jpg','https://7.react.pages.academy/static/hotel/3.jpg'],'title':'Beautiful & luxurious apartment at great location','is_favorite':false,'is_premium':false,'rating':3.5,'type':'room','bedrooms':1,'max_adults':3,'price':206,'goods':['Laptop friendly workspace'],'host':{'id':25,'name':'Angelina','is_pro':true,'avatar_url':'img/avatar-angelina.jpg'},'description':'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.','location':{'latitude':48.861610000000006,'longitude':2.340499,'zoom':16},'id':74},
];

const reviews =[{'id':1,'user':{'id':16,'is_pro':true,'name':'Mollie','avatar_url':'https://7.react.pages.academy/static/avatar/7.jpg'},'rating':3,'comment':'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)','date':'2021-06-30T16:51:35.215Z'},{'id':2,'user':{'id':12,'is_pro':true,'name':'Isaac','avatar_url':'https://7.react.pages.academy/static/avatar/3.jpg'},'rating':4,'comment':'Bathed in the nature. Completely unplugged. Unforgettable.','date':'2021-06-30T16:51:35.215Z'}];

const offersNearby = [
  [{'city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'preview_image':'https://7.react.pages.academy/static/hotel/16.jpg','images':['https://7.react.pages.academy/static/hotel/4.jpg','https://7.react.pages.academy/static/hotel/7.jpg'],'title':'The Pondhouse - A Magical Place','is_favorite':false,'is_premium':false,'rating':3.1,'type':'apartment','bedrooms':3,'max_adults':6,'price':118,'goods':['Breakfast','Fridge','Towels','Laptop friendly workspace','Washer','Baby seat','Air conditioning'],'host':{'id':25,'name':'Angelina','is_pro':true,'avatar_url':'img/avatar-angelina.jpg'},'description':'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.','location':{'latitude':48.84761,'longitude':2.356499,'zoom':16},'id':59},{'city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'preview_image':'https://7.react.pages.academy/static/hotel/17.jpg','images':['https://7.react.pages.academy/static/hotel/6.jpg','https://7.react.pages.academy/static/hotel/5.jpg'],'title':'The house among olive ','is_favorite':false,'is_premium':false,'rating':3.1,'type':'house','bedrooms':4,'max_adults':9,'price':336,'goods':['Baby seat','Dishwasher','Air conditioning','Coffee machine','Laptop friendly workspace','Fridge','Washer','Breakfast','Towels','Washing machine'],'host':{'id':25,'name':'Angelina','is_pro':true,'avatar_url':'img/avatar-angelina.jpg'},'description':'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.','location':{'latitude':48.865610000000004,'longitude':2.350499,'zoom':16},'id':25},{'city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'preview_image':'https://7.react.pages.academy/static/hotel/2.jpg','images':['https://7.react.pages.academy/static/hotel/6.jpg','https://7.react.pages.academy/static/hotel/3.jpg'],'title':'Beautiful & luxurious apartment at great location','is_favorite':false,'is_premium':false,'rating':3.5,'type':'room','bedrooms':1,'max_adults':3,'price':206,'goods':['Laptop friendly workspace'],'host':{'id':25,'name':'Angelina','is_pro':true,'avatar_url':'img/avatar-angelina.jpg'},'description':'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.','location':{'latitude':48.861610000000006,'longitude':2.340499,'zoom':16},'id':74}],
];

const room = {'city':{'name':'Amsterdam','location':{'latitude':52.37454,'longitude':4.897976,'zoom':13}},'preview_image':'https://7.react.pages.academy/static/hotel/11.jpg','images':['https://7.react.pages.academy/static/hotel/7.jpg','https://7.react.pages.academy/static/hotel/10.jpg'],'title':'The Pondhouse - A Magical Place','is_favorite':true,'is_premium':true,'rating':2.2,'type':'house','bedrooms':4,'max_adults':9,'price':748,'goods':['Dishwasher','Breakfast','Fridge','Baby seat','Washer','Towels','Laptop friendly workspace','Air conditioning'],'host':{'id':25,'name':'Angelina','is_pro':true,'avatar_url':'img/avatar-angelina.jpg'},'description':'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.','location':{'latitude':52.37454,'longitude':4.881976,'zoom':16},'id':2};

const favoritesOffers = [
  {
    id: 1,
    isFavorite: true,
  },
  {
    id: 2,
    isFavorite: true,
  },
];

const offersToUpdate = [
  {
    id: 0,
    isFavorite: false,
  },
  {
    id: 1,
    isFavorite: true,
  },
  {
    id: 2,
    isFavorite: true,
  },
  {
    id: 3,
    isFavorite: false,
  },
];

const offersNearbyToUpdate = [
  {
    id: 0,
    isFavorite: false,
  },
  {
    id: 1,
    isFavorite: true,
  },
  {
    id: 2,
    isFavorite: true,
  },
];

const roomToUpdate = {
  id: 0,
  isFavorite: true,
};

const errorMessage = 'Connection error.';

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {})).toEqual({
      offers: [],
      offersNearby: [],
      room: {},
      reviews: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isRoomDataLoaded: false,
      isFavoritesLoaded: false,
      errorMessage: '',
    });
  });

  it('should update offers by loaded data', () => {
    const state = {
      offers: [],
      offersNearby: [],
      room: {},
      reviews: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isRoomDataLoaded: false,
      isFavoritesLoaded: false,
      errorMessage: '',
    };
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
    expect(data(state, loadOffersAction))
      .toEqual({
        offers: offers,
        offersNearby: [],
        room: {},
        reviews: [],
        favoritesOffers: [],
        isDataLoaded: true,
        isRoomDataLoaded: false,
        isFavoritesLoaded: false,
        errorMessage: '',
      });
  });

  it('should set current offer load state by action payload', () => {
    const state = {
      offers: [],
      offersNearby: [],
      room: {},
      reviews: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isRoomDataLoaded: false,
      isFavoritesLoaded: false,
      errorMessage: '',
    };
    const loadRoomAction = {
      type: ActionType.LOAD_ROOM,
      payload: room,
    };

    expect(data(state, loadRoomAction))
      .toEqual({
        offers: [],
        offersNearby: [],
        room: room,
        reviews: [],
        favoritesOffers: [],
        isDataLoaded: false,
        isRoomDataLoaded: true,
        isFavoritesLoaded: false,
        errorMessage: '',
      });
  });

  it('should update reviews by loaded data', () => {
    const state = {
      offers: [],
      offersNearby: [],
      room: {},
      reviews: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isRoomDataLoaded: false,
      isFavoritesLoaded: false,
      errorMessage: '',
    };
    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
    expect(data(state, loadReviewsAction))
      .toEqual({
        offers: [],
        offersNearby: [],
        room: {},
        reviews: reviews,
        favoritesOffers: [],
        isDataLoaded: true,
        isRoomDataLoaded: false,
        isFavoritesLoaded: false,
        errorMessage: '',
      });
  });

  it('should update nearby offers by loaded data', () => {
    const state = {
      offers: [],
      offersNearby: [],
      room: {},
      reviews: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isRoomDataLoaded: false,
      isFavoritesLoaded: false,
      errorMessage: '',
    };
    const loadOffersNearbyAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offersNearby,
    };

    expect(data(state, loadOffersNearbyAction))
      .toEqual({
        offers: [],
        offersNearby: offersNearby,
        room: {},
        reviews: [],
        favoritesOffers: [],
        isDataLoaded: false,
        isRoomDataLoaded: false,
        isFavoritesLoaded: false,
        errorMessage: '',
      });
  });

  it('should set favorite offers load state by action payload', () => {
    const state = {
      offers: [],
      offersNearby: [],
      room: {},
      reviews: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isRoomDataLoaded: false,
      isFavoritesLoaded: false,
      errorMessage: '',
    };
    const loadFavoritesOffersAction = {
      type: ActionType.LOAD_FAVORITES_OFFERS,
      payload: favoritesOffers,
    };

    expect(data(state, loadFavoritesOffersAction))
      .toEqual({
        offers: [],
        offersNearby: [],
        room: {},
        reviews: [],
        favoritesOffers: favoritesOffers,
        isDataLoaded: false,
        isRoomDataLoaded: false,
        isFavoritesLoaded: true,
        errorMessage: '',
      });
  });

  it('should update room, offers, offers nearby, favorites by given favorite offer', () => {

    const state = {
      offers: offersToUpdate,
      offersNearby: offersNearbyToUpdate,
      room: roomToUpdate,
      reviews: reviews,
      favoritesOffers: favoritesOffers,
      isDataLoaded: true,
      isRoomDataLoaded: true,
      isFavoritesLoaded: true,
      errorMessage: '',
    };

    const updatedOffers = [
      {
        id: 0,
        isFavorite: true,
      },
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: false,
      },
    ];

    const updatedFavoritesOffers = [
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 0,
        isFavorite: true,
      },
    ];

    const updatedOffersNearby = [
      {
        id: 0,
        isFavorite: true,
      },
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
    ];

    const favoriteRoom = {
      id: 0,
      isFavorite: true,
    };

    const updateOfferAction = {
      type: ActionType.UPDATE_OFFER,
      payload: favoriteRoom,
    };

    expect(data(state, updateOfferAction))
      .toEqual({
        offers: updatedOffers,
        offersNearby: updatedOffersNearby,
        room: favoriteRoom,
        reviews: reviews,
        favoritesOffers: updatedFavoritesOffers,
        isDataLoaded: true,
        isRoomDataLoaded: true,
        isFavoritesLoaded: true,
        errorMessage: '',
      });
  });

  it('should set error message by action payload', () => {
    const state = {
      offers: [],
      offersNearby: [],
      room: {},
      reviews: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isRoomDataLoaded: false,
      isFavoritesLoaded: false,
      errorMessage: '',
    };
    const loadErrorMessageAction = {
      type: ActionType.LOAD_ERROR_MESSAGE,
      payload: errorMessage,
    };

    expect(data(state, loadErrorMessageAction))
      .toEqual({
        offers: [],
        offersNearby: [],
        room: {},
        reviews: [],
        favoritesOffers: [],
        isDataLoaded: false,
        isRoomDataLoaded: false,
        isFavoritesLoaded: false,
        errorMessage: errorMessage,
      });
  });
});
