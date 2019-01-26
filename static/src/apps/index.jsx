import React from 'react'
import {Provider} from 'react-redux'

import Base from './smallApp/Base'
import Routes from './smallApp/Routes'
import Store from './smallApp/Store'


class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes component={Base}/>
      </Provider>
    )
  }
}


export default App