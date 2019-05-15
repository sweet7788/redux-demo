import React from 'react';

import './App.css';

import { Provider } from 'react-redux'

import  store  from './store/index'

import Main from './component/Main'
import UserDetail from './component/UserDetail'

import { HashRouter , Route, Switch } from 'react-router-dom'

import route from './config/route'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
          <Switch>
            <Route path="/detail/:id" component={UserDetail}></Route>
            <Route path="/" component={Main}></Route>
          </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
