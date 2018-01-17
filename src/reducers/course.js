import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const initialState = [
  {
    id: '1',
    title: '课程1',
    likes: 2
  },
  {
    id: '2',
    title: '课程2',
    likes: 3
  }
]

const all = (state = initialState, action) => {
  switch (action.type) {
    case types.LIKE:
      return state.map(t => {
        if (t.id === action.id) {
          return {
            ...t,
            likes: t.likes + 1
          }
        }
        return t
      })
    default:
      return state
  }
}

export default combineReducers({
  all
})
