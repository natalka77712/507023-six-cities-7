import React from 'react';
import Footer from '../../footer/footer';
import FavoriteCard from './favorite-card/favorite-card';
import {useSelector} from 'react-redux';
import Header from '../../header/header';

function Favorites () {
  const {offers} = useSelector((state) => state.DATA);

  const favouriteList = [];

  offers.forEach((place) => {
    if (place.isFavorite) {
      favouriteList.push(place);
    }
  });

  return (
    <>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/some/valid/uri">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    favouriteList.map((offer) => <FavoriteCard offer={offer}  key={offer.id} />,
                    )
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Favorites;

