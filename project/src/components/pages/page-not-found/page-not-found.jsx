import React from 'react';
import {Link} from 'react-router-dom';

function PageNotFound () {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>404. Page not found</h1>
      <Link to="/">Go back to the main page</Link>
    </div>
  );
}

export default PageNotFound;
