import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SortType} from '../../const';
import {setSort} from '../../store/action';

function PlacesSorting () {
  const dispatch = useDispatch();
  const {activeSort} = useSelector((state) => state.OPERATION);
  const selectRef = useRef();

  const handleOpenToggle  = () => {
    selectRef.current.classList.toggle('places__options--opened');
  };

  const handleSortChange = (evt) => {
    dispatch(setSort(evt.target.innerText));
    selectRef.current.classList.remove('places__options--opened');
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={handleOpenToggle} className="places__sorting-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={selectRef}>
        {Object.values(SortType).map((sort) => (
          <li key={sort} onClick={handleSortChange} className={`places__option ${sort === activeSort  ? 'places__option--active' : ''}`} tabIndex="0">{sort}</li>
        ))}
      </ul>
    </form>
  );
}

export default React.memo(PlacesSorting);

