import * as types from '../constants/ActionTypes'

export const like = id => ({
  type: types.LIKE,
  id
})
