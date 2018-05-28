import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { getPosterUrl } from '../constants/ApiConstants'

const propTypes = {
  post: PropTypes.object.isRequired,
  editPost: PropTypes.func.isRequired,
}

class Course extends Component {
  handleClick = id => {
    this.props.editPost(id)
  }
  render () {
    const { post } = this.props
    return (
      <StyledCard>
        <StyledCardMedia image={getPosterUrl(post.poster)} />
        <CardContent>
          <Typography variant="headline" component="h2">
            {post.title}
          </Typography>
          <Typography component="p">{post.desc}</Typography>
        </CardContent>
        <StyledCardActions>
          <Button size="small" color="primary" onClick={() => this.handleClick(post._id)}>
            Edit
          </Button>
        </StyledCardActions>
      </StyledCard>
    )
  }
}

Course.propTypes = propTypes

export default Course

const StyledCard = styled(Card)`
  flex-basis: 200px;
  flex-shrink: 0;
  margin: 15px;
`

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%; /* 16:9 */
`

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`
