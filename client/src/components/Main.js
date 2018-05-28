import React, { Component } from 'react'
import Routes from 'react-static-routes'
import { Router } from 'react-static'
import PropTypes from 'prop-types'
import Header from './Header'
import '../app.css'

const propTypes = {
  loadPosts: PropTypes.func.isRequired,
}

class Main extends Component {
  componentDidMount () {
    this.props.loadPosts()
  }

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
Main.propTypes = propTypes

export default Main
