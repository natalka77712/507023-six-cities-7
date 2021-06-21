import React from 'react';
import PropTypes from 'prop-types';

function Image({image}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Studio" />
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
