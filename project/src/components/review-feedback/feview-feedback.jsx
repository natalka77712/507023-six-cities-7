import React, {memo} from 'react';
import PropTypes from 'prop-types';

function ReviewFeedback({comment, setComment}) {
  return (
    <textarea onChange={(evt) => setComment(evt.target.value)} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment}/>
  );
}

ReviewFeedback.propTypes = {
  comment: PropTypes.string,
  setComment: PropTypes.func.isRequired,
};

export default memo(ReviewFeedback);
