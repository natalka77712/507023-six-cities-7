import {INITIAL_CITY, SortType} from '../../const';
import {changeCity, setSort} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  city: INITIAL_CITY,
  activeSort: SortType.POPULAR,
};

const operation = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.activeSort = action.payload;
    });
});

export {operation};

