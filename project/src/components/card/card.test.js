import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import Card from './card';
import {PageType} from '../../const';

const offer = {
  id: 1,
  isFavorite: false,
  price: 748,
  title: 'This is a place for dreamers to reset',
};

describe('Component: Card', () => {
  it('should render correctly', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({});
    const history = createMemoryHistory();

    const fakeProps = {
      offer: offer,
      pageType: PageType.MAIN,
      onMouseEnter: () => {},
      onMouseLeave: () => {},
    };

    render(
      <Provider store={store}>
        <Router history={history}>
          <Card
            {...fakeProps}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/€748/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a place for dreamers to reset/i)).toBeInTheDocument();
  });
});
