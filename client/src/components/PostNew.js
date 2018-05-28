import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Form from './Form'

const propTypes = {
  submitForm: PropTypes.func.isRequired,
}

class PostNew extends React.Component {
  render () {
    return (
      <Wrap>
        <Form {...this.props} />
      </Wrap>
    )
  }
}

PostNew.propTypes = propTypes

export default PostNew

const Wrap = styled.div``
