import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PageNotFound from './page-not-found';

describe('Component: PageNotFound', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <PageNotFound />
      </Router>,
    );
    const headerElement = getByText('404. Page not found');
    const linkElement = getByText('Go back to the main page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
