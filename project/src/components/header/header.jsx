import React from 'react';
import {Link} from 'react-router-dom';
import {AuthorizationStatus, Path} from '../../const';
import Login from '../login/login';
import {useSelector} from 'react-redux';
import LogOut from '../log-out/log-out';

function Header() {

  const {authorizationStatus} = useSelector((state) => state.AUTHORIZATION);

  return (
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
  );
}

export default Header;
