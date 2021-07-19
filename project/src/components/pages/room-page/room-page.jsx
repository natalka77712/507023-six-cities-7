import React, {useEffect} from 'react';
import {AuthorizationStatus, Path} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import Login from '../../login/login';
import LogOut from '../../log-out/log-out';
import {fetchOffersNearby, fetchReviews, fetchRoomData} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';
import Property from '../../property/property';

function RoomPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {reviews, offersNearby, room, isRoomDataLoaded} = useSelector((state) => state.DATA);
  const {authorizationStatus} = useSelector((state) => state.AUTHORIZATION);

  useEffect(() => {
    dispatch(fetchRoomData(id));
    dispatch(fetchReviews(id));
    dispatch(fetchOffersNearby(id));
  }, [id, dispatch]);

  if (!isRoomDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={Path.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            {authorizationStatus === AuthorizationStatus.AUTH ? <Login/> : <LogOut/>}
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <Property
          room={room}
          reviews={reviews}
          nearOffers={offersNearby}
        />
      </main>
    </div>
  );
}

export default RoomPage;
