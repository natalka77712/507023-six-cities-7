import React, {useEffect} from 'react';
import Main from '../pages/main-page/main-page';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../pages/sign-in/sign-in';
import Favorites from '../pages/favorites/favorites';
import PageNotFound from '../pages/page-not-found/page-not-found';
import {Path} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import PropTypes from 'prop-types';
import {fetchOffers} from '../../store/api-actions';
import {connect} from 'react-redux';
import RoomPage from '../pages/room-page/room-page';
import reviewItemProp from '../review-item/review-item.prop';

function App({isOffersLoaded, onLoadData, reviews}) {

  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadData();
    }
  }, [isOffersLoaded, onLoadData]);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.MAIN} component={Main}/>
        <Route exact path={Path.LOGIN} component={SignIn}/>
        <Route exact path={Path.FAVORITES} component={Favorites}/>
        <Route exact path={Path.OFFER} render={()=><RoomPage reviews={reviews}/>}/>
        <Route exact path={Path.ERROR} component={PageNotFound}/>
        <Redirect from={'*'} to={Path.ERROR}/>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isOffersLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
    reviewItemProp,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  isOffersLoaded: state.isOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
