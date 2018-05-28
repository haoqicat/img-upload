import React from 'react'
import { connect } from 'react-redux'
import Main from '../components/Main'
import { loadPosts } from '../actions'

const MainContainer = props => <Main {...props} />

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { loadPosts })(MainContainer)
