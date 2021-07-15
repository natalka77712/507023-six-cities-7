import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createApi} from './api/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import thunk from 'redux-thunk';
import {redirect} from './store/middlewares/redirect';

const api = createApi(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'));
