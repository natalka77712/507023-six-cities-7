import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {postReview} from '../../store/api-actions';
import {Ratings} from '../../const';

function FormReview ({roomId, sendReview}) {

  const REVIEW_SIZING = {
    min: 50,
    max: 300,
  };

  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');

  const isButtonDisabled = rating === null || comment.length < REVIEW_SIZING.min
    || comment.length > REVIEW_SIZING.max;

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    sendReview(({id: roomId, comment: comment, rating: rating}));
    setRating(null);
    setComment('');
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => onFormSubmit(evt)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.values(Ratings).map(({value, title}) => (
          <React.Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={(evt) => setRating(Number(evt.target.value))}
              checked={rating === value}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea onChange={(evt) => setComment(evt.target.value)} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{REVIEW_SIZING.min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled ? 'disabled' : ''}>Submit</button>
      </div>
    </form>
  );
}

FormReview.propTypes = {
  sendReview: PropTypes.func.isRequired,
  roomId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
};

const mapDispatchToProps = {
  sendReview: postReview,
};

export {FormReview};
export default connect(null, mapDispatchToProps)(FormReview);
