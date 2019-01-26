import React from 'react'
import {Router, Route,IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from './Store'

// import Home from './view/Home'
// import About from './view/About'
// import NotFound from './view/NotFound'

const history = syncHistoryWithStore(browserHistory, store);
const getHomePage = (location, callback) => {
  require.ensure([], require => callback(null, require('./view/Home').default), 'home')
}
const getAboutPage = (location, callback) => {
  require.ensure([], require => callback(null, require('./view/About').default), 'about')
}
const getNotFoundPage = (location, callback) => {
  require.ensure([], require => callback(null, require('./view/NotFound').default), '404')
}
const Routers = (props) => (
  <Router history={history}>
    <Route path={'/app/smallapp/'} component={props.component} >
      <IndexRoute getComponent={getHomePage}/>
      <Route path={`home`}  getComponent={getHomePage}/>
      <Route path={`about`}  getComponent={getAboutPage}/>
      <Route path={`*`} getComponent={getNotFoundPage}/>
    </Route>
  </Router>
)
export default Routers;
