import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import Upload from '../containers/PosterUpload'

const propTypes = {
  submitForm: PropTypes.func.isRequired,
}

class Form extends React.Component {
  state = {
    title: '',
    body: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = () => {
    this.props.submitForm(this.state)
    this.setState({
      title: '',
      desc: '',
    })
  }

  render () {
    const { title, desc } = this.state
    return (
      <Wrap>
        <StyledTextField
          required
          label="标题"
          name="title"
          value={title}
          onChange={this.handleChange}
          margin="normal"
        />

        <StyledTextField
          multiline
          rows="4"
          required
          label="描述"
          name="desc"
          value={desc}
          onChange={this.handleChange}
          margin="normal"
        />
        <Button onClick={this.handleClick} variant="raised" color="secondary">
          新建课程
        </Button>
        <Upload />
      </Wrap>
    )
  }
}

Form.propTypes = propTypes

export default Form

const StyledTextField = styled(TextField)``
const Wrap = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
