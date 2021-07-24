import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './error-message.css';
import {loadErrorMessage} from '../../store/action';

const TIME = 5000;

function ErrorMessage () {
  const {errorMessage} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  if (errorMessage.length) {
    setTimeout(() => {
      dispatch(loadErrorMessage(''));
    }, TIME);
  }

  return (
    <div className="error-container" style={{display: !errorMessage.length && 'none'}}>
      <div className="error-item">{errorMessage} Please retry later.</div>
    </div>
  );
}

export default ErrorMessage;
