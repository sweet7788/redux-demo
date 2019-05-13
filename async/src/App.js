import React from 'react';

import './App.css';

import { Provider } from 'react-redux'

import  store  from './store/index'

import Component from './component'

function App() {
  return (
    <Provider store={store}>
      <Component></Component>
    </Provider>
  );
}

export default App;
