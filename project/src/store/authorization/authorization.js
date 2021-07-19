import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {setUserData, setLogOut, requireAuthorization} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: {},
};

const authorization = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.AUTH;
      state.userData = action.payload;
    })
    .addCase(setLogOut, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.userData = {};
    });
});

export {authorization};
