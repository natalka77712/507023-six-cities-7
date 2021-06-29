import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {nearPlaces} from './utils';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createApi} from './api/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import thunk from 'redux-thunk';
import {fetchOffers} from './store/api-actions';

const api = createApi(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

// store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} nearPlaces={nearPlaces}/>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'));
