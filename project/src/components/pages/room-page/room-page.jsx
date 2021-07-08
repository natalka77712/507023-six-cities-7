import React, {useState} from 'react';
import FormReview from '../../form-review/form-review';

import ReviewsList from '../../reviews-list/reviews-list';
import PropTypes from 'prop-types';
import reviewItemProp from '../../review-item/review-item.prop';
import cardProp from '../../card/card.prop';
import NearPlacesList from '../../near-places-list/near-places-list';
import Image from '../../elements/image/image';
import PropertyItem from '../../elements/property-item/property-item';
import {countRating} from '../../../utils';
import {AuthorizationStatus, Path, PlacesListType} from '../../../const';
import {connect} from 'react-redux';
import {Map} from '../../map/map';
import {Link, useParams} from 'react-router-dom';
import Login from '../../login/login';
import LogOut from '../../log-out/log-out';

function RoomPage({reviews, offers, authorizationStatus}) {
  const MAX_NEIGHBOURHOOD_OFFERS = 3;
  const {id} = useParams();
  const [activeCard, setActiveCard] = useState(null);
  const offer = offers.find((place) => place.id === +id);

  const nearPlaces = offers.slice(0, MAX_NEIGHBOURHOOD_OFFERS);

  const {
    description,
    goods,
    host,
    bedrooms,
    images,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
    location,
  } = offer ;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={Path.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            {authorizationStatus === AuthorizationStatus.AUTH ? <Login/> : <LogOut/>}
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => <Image key={image} image={image}/>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: countRating(rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => <PropertyItem key = {item} good = {item} />)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>
                <FormReview/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearPlaces} activeCard={activeCard} initialPosition={location}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlacesList offers={nearPlaces} setActiveCard={setActiveCard} type={PlacesListType.ROOM_PAGE} />
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  reviews: PropTypes.arrayOf(
    reviewItemProp,
  ).isRequired,
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
});

export {RoomPage};

export default connect(mapStateToProps, null)(RoomPage);
