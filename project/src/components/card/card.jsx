import React from 'react';
import cardProp from './card.prop.js';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {countRating} from '../../utils';
import {PageType, Types} from '../../const';
import FavoritesButton from '../favorites-button/favorites-button';

function Card ({offer, pageType, onMouseEnter, onMouseLeave})  {
  const {title, imgPreview, price, isFavorite, rating, type, isPremium, id} = offer;

  const favoriteCard = PageType.FAVORITE;
  return (
    <article
      className={`${pageType === favoriteCard ? PageType.FAVORITE.article : 'cities__place-card'} place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${pageType === favoriteCard ? PageType.FAVORITE.img : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={imgPreview} width={`${pageType === favoriteCard ? PageType.FAVORITE.width : '260'}`} height={`${pageType === favoriteCard ? PageType.FAVORITE.height : '200'}`} alt="Place"/>
        </Link>
      </div>
      <div className={`${pageType === favoriteCard ? PageType.FAVORITE.cardInfo : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton
            id={id}
            buttonType={Types.CARD}
            isFavorite={isFavorite}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: countRating(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: cardProp,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  pageType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default Card;
