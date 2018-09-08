import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './view/Home'
import About from './view/About'
import NotFound from './view/NotFound'

const Routers = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Routers;
