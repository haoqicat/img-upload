import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({
  posts: state.post.all,
})

export default connect(mapStateToProps)(HomeContainer)
