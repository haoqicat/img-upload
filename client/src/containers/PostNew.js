import React from 'react'
import { connect } from 'react-redux'
import PostNew from '../components/PostNew'
import { submitForm } from '../actions'

const PostNewContainer = props => <PostNew {...props} />

export default connect(null, { submitForm })(PostNewContainer)
