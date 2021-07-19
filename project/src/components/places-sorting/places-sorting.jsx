import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SortType} from '../../const';
import {changeCity} from '../../store/action';

function PlacesSorting () {
  const dispatch = useDispatch();
  const {activeSort} = useSelector((state) => state.OPERATION);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenToggle  = (currOpenState) => {
    setIsOpen(!currOpenState);
  };

  const handleSortChange = (evt) => {
    dispatch(changeCity(evt.target.innerText));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span  onClick={() => {handleOpenToggle(isOpen);}} className="places__sorting-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''} `}>
        {Object.values(SortType).map((sort) => (
          <li key={sort} onClick={handleSortChange} className={`places__option ${sort === activeSort  ? 'places__option--active' : ''}`} tabIndex="0">{sort}</li>
        ))}
      </ul>
    </form>
  );
}

export default React.memo(PlacesSorting);

