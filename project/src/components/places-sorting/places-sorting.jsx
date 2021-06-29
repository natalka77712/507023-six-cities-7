import React, {useState} from 'react';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {SortType} from '../../const';

function PlacesSorting ({changeSort, activeSort}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenToggle  = (currOpenState) => {
    setIsOpen(!currOpenState);
  };

  const handleSortChange = (evt) => {
    changeSort(evt.target.innerText);
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

PlacesSorting.propTypes = {
  changeSort: PropTypes.func.isRequired,
  activeSort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeSort: state.activeSort,
});

const mapDispatchToProps = (dispatch) => ({
  changeSort(sort) {
    dispatch(ActionCreator.setSort(sort));
  },
});

export {PlacesSorting};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
