import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {setFavorites} from '../../store/api-actions';
import {FavoritesButtonTypes} from '../../const';

function FavoritesButton ({id, buttonType,isFavorite}) {
  const dispatch = useDispatch();
  const {buttonClassName, imgWidth, imgHeight} = FavoritesButtonTypes[buttonType];

  const handleFavoriteClick = () => {
    dispatch(setFavorites({id: id, status: isFavorite ? 0 : 1}));
  };

  return (
    <button className={`${buttonClassName}__bookmark-button button ${isFavorite ? `${buttonClassName}__bookmark-button--active` : ''}`} type="button" onClick={handleFavoriteClick}>
      <svg className={`${buttonClassName}__bookmark-icon`} width={imgWidth} height={imgHeight}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

FavoritesButton.propTypes = {
  id: PropTypes.number.isRequired,
  buttonType: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default FavoritesButton;
