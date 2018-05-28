import React from 'react'
import { connect } from 'react-redux'
import PostEdit from '../components/PostEdit'
import { submitForm } from '../actions'
import { getEditedPost } from '../selectors'

const PostEditContainer = props => <PostEdit {...props} />

const mapStateToProps = state => ({
  isEdit: true,
  post: getEditedPost(state),
})

export default connect(mapStateToProps, { submitForm })(PostEditContainer)
