import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {nearPlaces} from './utils';
import {offers} from './mocks/offers';


ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews} nearPlaces={nearPlaces}/>
  </React.StrictMode>,
  document.getElementById('root'));
