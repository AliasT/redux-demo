import React from 'react'
import ReactDOM from 'react-dom'
import Search from './containers/Search'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import store from './store/store'

import "./sass/base.scss";


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Search}></Route>
      {/* <Route path="/subject/:id" component={Subject}></Route> */}
    </Router>
  </Provider>
, document.getElementById('app'))



