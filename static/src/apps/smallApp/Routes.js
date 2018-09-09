import React from 'react'
import {Router, Route,IndexRoute, browserHistory} from 'react-router'

import Home from './view/Home'
import About from './view/About'
import NotFound from './view/NotFound'

const Routers = (props) => (
  <Router history={browserHistory}>
    <Route path={'/app/smallapp/'} component={props.component} >
      <IndexRoute component={Home}/>
      <Route path={`home`}  component={Home}/>
      <Route path={`about`}  component={About}/>
      <Route path={`*`} component={NotFound}/>
    </Route>
  </Router>
)
export default Routers;
