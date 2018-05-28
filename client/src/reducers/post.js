import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const all = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}

export default combineReducers({
  all,
})
