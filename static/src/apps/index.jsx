import React from 'react'

import Base from './smallApp/Base'
import Routes from './smallApp/Routes'

class App extends React.Component {
  render() {
    return (
      <Routes component={Base}/>
    )
  }
}


export default App