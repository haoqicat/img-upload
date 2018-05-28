import axios from 'axios'
import * as types from '../constants/ActionTypes'
import { ALL_POSTS_URL } from '../constants/ApiConstants'
import history from '../utils/router'

export const loadPosts = () => async dispatch => {
  const res = await axios.get(ALL_POSTS_URL)
  const posts = res.data
  dispatch({ type: types.FETCH_POSTS_SUCCESS, posts })
}

export const submitForm = data => () => {
  console.log(data)
  history.push('/')
}
