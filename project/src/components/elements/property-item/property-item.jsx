import React from 'react';
import PropTypes from 'prop-types';

function PropertyItem({good}) {
  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
}

PropertyItem.propTypes = {
  good: PropTypes.string.isRequired,
};

export default PropertyItem;
