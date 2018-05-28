import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import { editPost } from '../actions'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({
  posts: state.post.all,
})

export default connect(mapStateToProps, { editPost })(HomeContainer)
