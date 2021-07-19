import React from 'react';
import {Link} from 'react-router-dom';
import {Path} from '../../const';
import {logout} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const {userData} = useSelector((state) => state.AUTHORIZATION);

  const {email, avatarUrl} = userData;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={Path.LOGIN} className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={avatarUrl} alt='user' style={{borderRadius: '50%'}}/>
            </div>
            <span className="header__user-name user__name">
              {email}
            </span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a
            className="header__nav-link"
            href="/some/valid/uri"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logout());
            }}
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Login;

