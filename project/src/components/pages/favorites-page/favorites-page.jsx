import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavoritesOffers} from '../../../store/api-actions';
import Favorites from '../../favorites/favorites';
import Header from '../../header/header';
import LoadingScreen from '../../loading-screen/loading-screen';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Footer from '../../footer/footer';

function FavoritesPage() {
  const dispatch = useDispatch();
  const {favoritesOffers, isFavoritesLoaded} = useSelector((state) => state.DATA);

  const cities = Array.from(new Set(favoritesOffers.map((item) => item.city.name)));
  const favoritesCities = [...cities.values()];

  useEffect(() => {
    dispatch(fetchFavoritesOffers());
  }, [dispatch]);

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      {favoritesOffers.length !== 0 ? (
        <Favorites
          favoritesOffers={favoritesOffers}
          favoritesCities={favoritesCities}
        />) : (
        <FavoritesEmpty />
      )}
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
