import React, {useEffect} from 'react';
import Main from '../pages/main-page/main-page';
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import Favorites from '../pages/favorites/favorites';
import PageNotFound from '../pages/page-not-found/page-not-found';
import {AuthorizationStatus, Path} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {checkAuth, fetchOffers} from '../../store/api-actions';
import {useSelector, useDispatch} from 'react-redux';
import RoomPage from '../pages/room-page/room-page';
import browserHistory from '../../browser-history';
import PrivateRoute from '../../private-route/private-route';

const isCheckingAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

function App() {
  const {authorizationStatus} = useSelector((state) => state.AUTHORIZATION);
  const {isDataLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(checkAuth());
  }, [dispatch]);

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
        <Route exact path={Path.OFFER} render={()=><RoomPage/>}/>
        <Route exact path={Path.ERROR} component={PageNotFound}/>
        <Redirect from={'*'} to={Path.ERROR}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
