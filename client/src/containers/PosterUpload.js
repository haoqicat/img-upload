import React from 'react'
import { connect } from 'react-redux'
import PosterUpload from '../components/PosterUpload'
import { setImageFile } from '../actions'

const PosterUploadContainer = props => <PosterUpload {...props} />

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { setImageFile })(PosterUploadContainer)
