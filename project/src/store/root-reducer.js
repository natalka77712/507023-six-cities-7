import {combineReducers} from 'redux';
import {authorization} from './authorization/authorization';
import {data} from './data/data';
import {operation} from './operation/operation';

export const NameSpace = {
  DATA: 'DATA',
  AUTHORIZATION: 'AUTHORIZATION',
  OPERATION: 'OPERATION',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.OPERATION]: operation,
  [NameSpace.AUTHORIZATION]: authorization,
});
