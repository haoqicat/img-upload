import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Course from './Course'

const propTypes = {
  posts: PropTypes.array.isRequired,
}

class Home extends Component {
  render () {
    const { posts } = this.props
    const postList = posts.map(t => <Course key={t._id} post={t} />)
    return <Wrap>{postList}</Wrap>
  }
}

Home.propTypes = propTypes
export default Home

const Wrap = styled.div`
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  width: 460px;
  margin: 0 auto;
`
