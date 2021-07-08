import React from 'react';
import {Link} from 'react-router-dom';
import {Path} from '../../const';
import {logout} from '../../store/api-actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function Login({userEmail, signOut}) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={Path.LOGIN} className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">
              {userEmail}
            </span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a
            className="header__nav-link"
            href="/some/valid/uri"
            onClick={(evt) => {
              evt.preventDefault();
              signOut();
            }}
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

Login.propTypes = {
  signOut: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.userEmail,
});

const mapDispatchToProps = (dispatch) => ({
  signOut() {
    dispatch(logout());
  },
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

