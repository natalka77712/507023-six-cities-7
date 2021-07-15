import React, {useEffect} from 'react';
import Main from '../pages/main-page/main-page';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import Favorites from '../pages/favorites/favorites';
import PageNotFound from '../pages/page-not-found/page-not-found';
import {AuthorizationStatus, Path} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import PropTypes from 'prop-types';
import {checkAuth, fetchOffers} from '../../store/api-actions';
import {connect} from 'react-redux';
import RoomPage from '../pages/room-page/room-page';
import reviewItemProp from '../review-item/review-item.prop';
import browserHistory from '../../browser-history';
import {PrivateRoute} from '../../private-route/private-route';

const isCheckingAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

function App({requireAuthorization, isDataLoaded, onLoadData, reviews, authorizationStatus}) {

  useEffect(() => {
    onLoadData();
    requireAuthorization();
  }, [onLoadData, requireAuthorization]);

  if (isCheckingAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Path.MAIN} component={Main}/>
        <Route exact path={Path.LOGIN} component={LoginPage}/>
        <PrivateRoute exact path={Path.FAVORITES} render={() => (<Favorites/>)}/>
        <Route exact path={Path.OFFER} render={()=><RoomPage reviews={reviews}/>}/>
        <Route exact path={Path.ERROR} component={PageNotFound}/>
        <Redirect from={'*'} to={Path.ERROR}/>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  requireAuthorization: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string,
  isDataLoaded: PropTypes.bool,
  onLoadData: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
    reviewItemProp,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isOffersLoaded,
  authorizationStatus: state.authorizationStatus,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
  requireAuthorization() {
    dispatch(checkAuth());
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
