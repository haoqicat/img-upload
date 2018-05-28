import React, { Component } from 'react'
import styled from 'styled-components'
import Add from './Add'

class PosterUpload extends Component {
  state = {
    image: '',
  }

  handleChange = e => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = evt => {
      console.log('onload', evt.target.result)
      this.setState({
        image: evt.target.result,
      })
    }
  }

  render () {
    const { image } = this.state

    return (
      <Wrap image={image}>
        <Label image={image} htmlFor="imageUploadBtn">
          <Add />
        </Label>
        <Input onChange={this.handleChange} type="file" id="imageUploadBtn" />
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
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

const Label = styled.label`
  display: ${props => (props.image ? 'none' : 'block')};
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
