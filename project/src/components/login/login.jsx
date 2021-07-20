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
          <Link to={Path.FAVORITES} className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={avatarUrl} alt='user' style={{borderRadius: '50%'}}/>
            </div>
            <span className="header__user-name user__name">
              {email}
            </span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            to={Path.MAIN}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logout());
            }}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Login;

