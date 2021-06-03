import React from 'react';
import Main from '../main/main';
import {arrayOf, bool, number, shape, string} from 'prop-types';

function App(props) {
  const {cards} = props;
  return (
    <Main cards={cards}/>
  );
}

App.propTypes = {
  cards: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      imgPreview: string.isRequired,
      price: number.isRequired,
      isPremium: bool.isRequired,
    }),
  ),
};
export default App;
