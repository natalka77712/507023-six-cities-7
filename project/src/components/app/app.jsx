import React from 'react';
import Main from '../pages/main/main';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../pages/sign-in/sign-in';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/rооm';
import PageNotFound from '../pages/page-not-found/page-not-found';
import {Path} from '../../const';
import cardProp from '../card/card.prop';
import reviewItemProp from '../review-item/review-item.prop';
import PropTypes from 'prop-types';



function App({reviews, nearPlaces}) {

  // if (isCheckedAuth(authorizationStatus) || !isOffersLoaded) {
  //   return  (
  //     <LoadingScreen />
  //   );
  // }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.MAIN} component={Main}/>
        <Route exact path={Path.LOGIN} component={SignIn}/>
        <Route exact path={Path.FAVORITES} component={Favorites}/>
        <Route exact path={Path.OFFER} render={()=><Room reviews={reviews} nearPlaces={nearPlaces}/>}/>
        <Route exact path={Path.ERROR} component={PageNotFound}/>
        <Redirect from={'*'} to={Path.ERROR}/>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  reviews: PropTypes.arrayOf(
    reviewItemProp,
  ).isRequired,
  nearPlaces: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  // isOffersLoaded: PropTypes.bool.isRequired,
  // authorizationStatus: PropTypes.string.isRequired,
};

// const mapStateToProps = (state) => ({
  // authorizationStatus: state.authorizationStatus,
  // isOffersLoaded: state.isOffersLoaded,
// })

// export {App};
// export default connect(mapStateToProps, null)(App);

export default App;
