import * as types from '../constants/ActionTypes'

export const like = id => ({
  type: types.LIKE,
  id
})

export const addComment = comment => ({
  type: types.ADD_COMMENT,
  comment
})

export const deleteCmt = id => ({
  type: types.DELETE_COMMENT,
  id
})
