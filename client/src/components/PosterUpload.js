import React, { Component } from 'react'
import styled from 'styled-components'
import Add from './Add'
import { readUploadedFileAsDataURL } from '../utils/upload'

class PosterUpload extends Component {
  state = {
    image: '',
  }

  handleChange = async e => {
    const file = e.target.files[0]
    try {
      const image = await readUploadedFileAsDataURL(file)
      this.setState({
        image,
      })
    } catch (err) {
      alert(err)
    }
  }

  render () {
    const { image } = this.state

    return (
      <Wrap image={image}>
        <Label image={image} htmlFor="imageUploadBtn">
          <Add />
        </Label>
        <LabelAdd image={image} htmlFor="imageUploadBtn">
          <Add />
        </LabelAdd>
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
  position: relative;
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

const LabelAdd = styled.label`
  display: ${props => (props.image ? 'block' : 'none')};
  background-color: #ddd;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  svg {
    fill: white;
    width: 24px;
    height: 24px;
  }
`
