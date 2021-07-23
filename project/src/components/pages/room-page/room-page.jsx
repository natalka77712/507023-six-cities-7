import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchOffersNearby, fetchReviews, fetchRoomData} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';
import Property from '../../property/property';
import Header from '../../header/header';

function RoomPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {isRoomDataLoaded} = useSelector((state) => state.DATA);

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
      <Header/>

      <main className="page__main page__main--property">
        <Property/>
      </main>
    </div>
  );
}

export default RoomPage;
