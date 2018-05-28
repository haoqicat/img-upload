import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import styled from 'styled-components'
import { Link } from 'react-static'

export default () => (
  <Wrap>
    <AppBar position="static" color="primary">
      <div className="inner">
        <Link exact to="/">
          首页
        </Link>
        <Link exact to="/post/new">
          新建
        </Link>
      </div>
    </AppBar>
  </Wrap>
)

const Wrap = styled.div`
  .active {
    border-bottom: 2px solid white;
  }
  .inner {
    display: flex;
    padding: 10px;
    width: 400px;
    margin: 0 auto;
    a {
      margin-right: 15px;
      color: white;
    }
  }
`
