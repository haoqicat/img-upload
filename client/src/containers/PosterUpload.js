import React from 'react'
import { connect } from 'react-redux'
import PosterUpload from '../components/PosterUpload'
import { setImageFile } from '../actions'
import { getEditedPosterUrl } from '../selectors'

const PosterUploadContainer = props => <PosterUpload {...props} />

const mapStateToProps = state => ({
  posterUrl: getEditedPosterUrl(state),
})

export default connect(mapStateToProps, { setImageFile })(PosterUploadContainer)
