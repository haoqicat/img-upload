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

const updatePost = async (data, dispatch) => {
  const formData = initFormData(data)
  formData.append('id', data.id)
  try {
    const res = await axios.put(POST_URL, formData)
    dispatch({ type: types.UPADTE_POST_SUCCESS, post: res.data })
    history.push('/')
  } catch (err) {
    console.log(err)
    if (err.response) {
      console.log(err.response.data.msg)
    }
  }
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
  const isEdit = !!getState().post.editId
  const formData = imageFile ? { ...data, imageFile } : data
  if (isEdit) {
    updatePost({ ...formData, id: getState().post.editId }, dispatch)
  } else {
    newPost(formData, dispatch)
  }
}

export const editPost = id => dispatch => {
  dispatch({ type: types.SET_EDIT_ID, id })
  history.push('/post/edit')
}

export const setImageFile = imageFile => dispatch => {
  dispatch({ type: types.SET_IMAGE_FILE, imageFile })
}
