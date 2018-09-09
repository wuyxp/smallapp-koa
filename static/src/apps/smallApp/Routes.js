import React from 'react'
import {Router, Route,IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from './Store'

import Home from './view/Home'
import About from './view/About'
import NotFound from './view/NotFound'

const history = syncHistoryWithStore(browserHistory, store);
const Routers = (props) => (
  <Router history={history}>
    <Route path={'/app/smallapp/'} component={props.component} >
      <IndexRoute component={Home}/>
      <Route path={`home`}  component={Home}/>
      <Route path={`about`}  component={About}/>
      <Route path={`*`} component={NotFound}/>
    </Route>
  </Router>
)
export default Routers;
