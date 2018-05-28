import React from 'react'
import { connect } from 'react-redux'
import PosterUpload from '../components/PosterUpload'

const PosterUploadContainer = props => <PosterUpload {...props} />

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(PosterUploadContainer)
