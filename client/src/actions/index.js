import axios from 'axios'
import * as types from '../constants/ActionTypes'
import { ALL_POSTS_URL, POST_URL } from '../constants/ApiConstants'
import history from '../utils/router'
import { initFormData } from '../utils/upload'

export const loadPosts = () => async dispatch => {
  const res = await axios.get(ALL_POSTS_URL)
  const posts = res.data
  dispatch({ type: types.FETCH_POSTS_SUCCESS, posts })
}

const newPost = async (data, dispatch) => {
  const formData = initFormData(data)
  try {
    const res = await axios.post(POST_URL, formData)
    dispatch({ type: types.SUBMIT_POST_SUCCESS, post: res.data })
    history.push('/')
  } catch (err) {
    console.log(err)
  }
}

export const submitForm = data => (dispatch, getState) => {
  const { imageFile } = getState().post
  console.log('imageFile', imageFile)
  newPost({ ...data, imageFile }, dispatch)
}

export const setImageFile = imageFile => dispatch => {
  dispatch({ type: types.SET_IMAGE_FILE, imageFile })
}
