import React,{ Component } from 'react';

import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { store } from './store'

import Fruit from './component/fruit'


class App extends Component {
  render(){
    return(
      <div>
          <Provider store={store}>
              <Fruit></Fruit>
          </Provider>
      </div>
    )
  }
    
}

export default App;
