import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Form from './Form'

const propTypes = {
  isEdit: PropTypes.bool.isRequired,
  submitForm: PropTypes.func.isRequired,
}

class PostEdit extends React.Component {
  render () {
    return (
      <Wrap>
        <Form {...this.props} />
      </Wrap>
    )
  }
}

PostEdit.propTypes = propTypes

export default PostEdit

const Wrap = styled.div``
