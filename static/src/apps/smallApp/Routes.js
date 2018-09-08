import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './view/Home'
import About from './view/About'
import NotFound from './view/NotFound'

const Routers = (props) => (
    <BrowserRouter>
        <Switch>
            <Route path={props.match.path} exact component={Home} />
            <Route path={`${props.match.path}/home`} exact component={Home}/>
            <Route path={`${props.match.path}/about`} exact component={About}/>
            <Route path={`${props.match.path}/*`} component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Routers;
