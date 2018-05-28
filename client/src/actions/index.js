import axios from 'axios'
import * as types from '../constants/ActionTypes'
import { ALL_POSTS_URL, POST_URL } from '../constants/ApiConstants'
import history from '../utils/router'

export const loadPosts = () => async dispatch => {
  const res = await axios.get(ALL_POSTS_URL)
  const posts = res.data
  dispatch({ type: types.FETCH_POSTS_SUCCESS, posts })
}

const newPost = async (data, dispatch) => {
  try {
    const res = await axios.post(POST_URL, data)
    dispatch({ type: types.SUBMIT_POST_SUCCESS, post: res.data })
    history.push('/')
  } catch (err) {
    console.log(err)
  }
}

export const submitForm = data => dispatch => {
  newPost(data, dispatch)
}
