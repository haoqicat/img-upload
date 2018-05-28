import React, { Component } from 'react'
import styled from 'styled-components'
import Add from './Add'

class PosterUpload extends Component {
  render () {
    return (
      <Wrap>
        <Label htmlFor="imageUploadBtn">
          <Add />
        </Label>
        <Input type="file" id="imageUploadBtn" />
      </Wrap>
    )
  }
}

export default PosterUpload

const Wrap = styled.div`
  margin-top: 20px;
  width: 180px;
  border: 1px solid #ddd;
  height: 180px;
  background-color: #f8f8f8;
`

const Label = styled.label`
  display: block;
  padding: 80px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`

const Input = styled.input`
  display: none;
`
