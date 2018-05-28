import React, { Component } from 'react'
import Routes from 'react-static-routes'
import { Router } from 'react-static'
import Header from './Header'
import '../app.css'

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Routes />
        </div>
      </Router>
    )
  }
}

export default Main
