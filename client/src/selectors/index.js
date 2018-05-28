import { createSelector } from 'reselect'
import { getPosterUrl } from '../constants/ApiConstants'

const getPostsById = state =>
  state.post.all.reduce((obj, t) => {
    obj[t._id] = t
    return obj
  }, {})

const getEditId = state => state.post.editId

export const getEditedPost = createSelector(getEditId, getPostsById, (id, posts) => posts[id] || {})

export const getEditedPosterUrl = state => {
  console.log('xxx', state, getEditedPost(state))
  return state.post.editId ? getPosterUrl(getEditedPost(state).poster) : ''
}
