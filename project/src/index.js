import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const cards = [
  {
    id: 1,
    imgPreview: 'img/apartment-01.jpg',
    price: 120,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    isPremium: true,
    rating: 1,
  },
  {
    id: 2,
    imgPreview: 'img/room.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Private room',
    isPremium: false,
    rating: 2.8,
  },
  {
    id: 3,
    imgPreview: 'img/apartment-02.jpg',
    price: 132,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    isPremium: false,
    rating: 3.5,
  },
  {
    id: 4,
    imgPreview: 'img/apartment-03.jpg',
    price: 180,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isPremium: true,
    rating: 4.3,
  },
  {
    id: 5,
    imgPreview: 'img/room.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'Private room',
    isPremium: false,
    rating: 4.8,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App cards={cards}/>
  </React.StrictMode>,
  document.getElementById('root'));
