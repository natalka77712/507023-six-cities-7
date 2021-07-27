import React, {memo, useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {postReview} from '../../store/api-actions';
import RatingList from '../rating-list/rating-list';
import ReviewFeedback from '../review-feedback/feview-feedback';

function FormReview ({roomId}) {
  const dispatch = useDispatch();

  const REVIEW_SIZING = {
    min: 50,
    max: 300,
  };

  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const [, setReadonly] = useState(false);

  const isButtonDisabled = rating === null || comment.length < REVIEW_SIZING.min
    || comment.length > REVIEW_SIZING.max;

  const reset = () => {
    setRating(null);
    setComment('');
  };

  const onFail = () => {
    setReadonly(false);
  };

  const onSuccess = () => {
    reset();
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postReview(roomId, {comment: comment, rating: rating}))
      .then(() => onSuccess())
      .catch(() => {
        onFail();
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => onFormSubmit(evt)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingList rating={rating} setRating={setRating} />
      </div>
      <ReviewFeedback comment={comment} setComment={setComment}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{REVIEW_SIZING.min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled ? 'disabled' : ''}>Submit</button>
      </div>
    </form>
  );
}

FormReview.propTypes = {
  roomId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
};

export default memo(FormReview);
