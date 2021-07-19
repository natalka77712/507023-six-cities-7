import React from 'react';
import Image from '../elements/image/image';
import {countRating} from '../../utils';
import PropertyItem from '../elements/property-item/property-item';
import ReviewsList from '../reviews-list/reviews-list';
import {AuthorizationStatus, PlacesListType} from '../../const';
import FormReview from '../form-review/form-review';
import Map from '../map/map';
import NearPlacesList from '../near-places-list/near-places-list';
import {useSelector} from 'react-redux';

function Property() {
  const MAX_NEARBY_OFFERS = 3;
  const MAX_IMAGES_COUNT = 6;
  const {reviews, offersNearby, room} = useSelector((state) => state.DATA);
  const {authorizationStatus} = useSelector((state) => state.AUTHORIZATION);
  const nearOffers = offersNearby.filter((item) => item !== room).slice(0, MAX_NEARBY_OFFERS);

  const {
    id,
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
    city,
  } = room ;

  const {avatarUrl, isPro, name} = host;

  const imagesToRender = images.slice(0, MAX_IMAGES_COUNT);

  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {imagesToRender.map((image) => <Image key={image} image={image}/>)}
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
                  <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {name}
                </span>
                {isPro && (
                  <span className="property__user-status">Pro</span>
                )}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewsList reviews={reviews}/>
              {authorizationStatus === AuthorizationStatus.AUTH && (<FormReview roomId={id}/>)}
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map offers={[room, ...offersNearby]} activeCard={room} initialPosition={city}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <NearPlacesList offers={nearOffers} onMouseEnter={() => {}} onMouseLeave={() => {}} type={PlacesListType.ROOM_PAGE} />
        </section>
      </div>
    </>
  );
}

export default Property;
