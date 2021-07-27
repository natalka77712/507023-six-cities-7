import {operation} from './operation';
import {changeCity, setSort} from '../action';
import {SortType} from '../../const';

describe('Reducer: operation', () => {
  it('without additional parameters should return initial state', () => {
    expect(operation(undefined, {})).toEqual({
      city: 'Paris',
      activeSort: SortType.POPULAR,
    });
  });

  it('Reducer should set given sort type', () => {
    const state = {
      city: 'Paris',
      activeSort: SortType.POPULAR,
    };

    expect(operation(state, setSort(SortType.PRICE_HIGH)))
      .toEqual({
        city: 'Paris',
        activeSort: SortType.PRICE_HIGH,
      });
  });

  it('Reducer should change initial city', () => {
    const state = {
      city: 'Paris',
      activeSort: SortType.POPULAR,
    };

    expect(operation(state, changeCity('Cologne')))
      .toEqual({
        city: 'Cologne',
        activeSort: SortType.POPULAR,
      });
  });
});
