import React from 'react';
import { store } from '../reducer/store/store'
import Main from './main';
import { Provider } from 'react-redux';

const _layout = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default _layout;
