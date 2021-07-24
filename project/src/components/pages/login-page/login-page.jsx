import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {Path} from '../../../const';
import {login} from '../../../store/api-actions';
import {validateEmail, validatePassword} from '../../../utils';
import Logo from '../../logo/logo';

function LoginPage () {
  const loginRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const {city} = useSelector((state) => state.OPERATION);

  const onFormChange = () => {
    loginRef.current.setCustomValidity('');
    passwordRef.current.setCustomValidity('');

    if (!validateEmail(loginRef.current.value)) {
      loginRef.current.setCustomValidity('Email was entered incorrectly');
    }

    if (!validatePassword(passwordRef.current.value)) {
      passwordRef.current.setCustomValidity('Password should not contain only spaces');
    }

    formRef.current.reportValidity();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!formRef.current.reportValidity()) {
      return;
    }
    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
    history.push(Path.MAIN);
  };

  if (localStorage.token) {
    return <Redirect to={Path.MAIN} />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onChange={onFormChange} ref={formRef} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button onClick={handleSubmit} className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={Path.MAIN}>
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
