import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const all = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return action.posts
    case types.SUBMIT_POST_SUCCESS:
      return [...state, action.post]
    case types.UPADTE_POST_SUCCESS:
      return state.map(t => {
        if (t._id === action.post._id) {
          return action.post
        }
        return t
      })
    default:
      return state
  }
}

const imageFile = (state = '', action) => {
  switch (action.type) {
    case types.SET_IMAGE_FILE:
      return action.imageFile
    default:
      return state
  }
}

const editId = (state = '', action) => {
  switch (action.type) {
    case types.SET_EDIT_ID:
      return action.id
    default:
      return state
  }
}

export default combineReducers({
  all,
  imageFile,
  editId,
})
