import React from 'react';
import Main from '../main/main';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/rооm';
import PageNotFound from '../page-not-found/page-not-found';
import {Path} from '../../const';
import cardProp from '../card/card.prop';
import reviewItemProp from '../review-item/review-item.prop';
import PropTypes from 'prop-types';

function App(props) {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.MAIN} render={()=><Main offers={offers}/>}/>
        <Route exact path={Path.LOGIN} render={()=><SignIn/>}/>
        <Route exact path={Path.FAVORITES} render={()=><Favorites offers={offers}/>}/>
        <Route exact path={Path.OFFER} render={()=><Room reviews={reviews} offers={offers}/>}/>
        <Route exact path={Path.ERROR} render={()=><PageNotFound/>}/>
        <Redirect from={'*'} to={Path.ERROR}/>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  reviews: PropTypes.arrayOf(
    reviewItemProp,
  ).isRequired,
};

export default App;
