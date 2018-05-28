import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const propTypes = {
  post: PropTypes.object.isRequired,
}

class Course extends Component {
  render () {
    const { post } = this.props
    return (
      <StyledCard>
        <CardContent>
          <Typography variant="headline" component="h2">
            {post.title}
          </Typography>
          <Typography component="p">{post.desc}</Typography>
        </CardContent>
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
