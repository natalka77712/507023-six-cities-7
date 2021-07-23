import React from 'react';
import {AuthorizationStatus} from '../../const';
import Login from '../login/login';
import {useSelector} from 'react-redux';
import LogOut from '../log-out/log-out';
import Logo from '../logo/logo';

function Header() {

  const {authorizationStatus} = useSelector((state) => state.AUTHORIZATION);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo/>
          {authorizationStatus === AuthorizationStatus.AUTH ? <Login/> : <LogOut/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
