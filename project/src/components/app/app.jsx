import React from 'react';
import Main from '../pages/main/main';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../pages/sign-in/sign-in';
import Favorites from '../pages/favorites/favorites';
import PageNotFound from '../pages/page-not-found/page-not-found';
import {Path} from '../../const';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.MAIN} component={Main}/>
        <Route exact path={Path.LOGIN} component={SignIn}/>
        <Route exact path={Path.FAVORITES} component={Favorites}/>
        {/*<Route exact path={Path.OFFER} render={()=><Room reviews={reviews}/>}/>*/}
        <Route exact path={Path.ERROR} component={PageNotFound}/>
        <Redirect from={'*'} to={Path.ERROR}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
