import React from 'react';
import Main from '../main/main';
import {arrayOf, bool, number, shape, string} from 'prop-types';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/rооm';
import PageNotFound from '../page-not-found/page-not-found';

export const PATH = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
  ERROR: '/404',
};

function App(props) {
  const {cards} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATH.MAIN} render={()=><Main cards={cards}/>}/>
        <Route exact path={PATH.LOGIN} render={()=><SignIn/>}/>
        <Route exact path={PATH.FAVORITES} render={()=><Favorites/>}/>
        <Route exact path={PATH.OFFER} render={()=><Room/>}/>
        <Route exact path={PATH.ERROR} render={()=><PageNotFound/>}/>
        <Redirect from={'*'} to={PATH.ERROR}/>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cards: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      imgPreview: string.isRequired,
      price: number.isRequired,
      isPremium: bool.isRequired,
    }),
  ),
};
export default App;
