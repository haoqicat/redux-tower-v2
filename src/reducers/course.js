import { combineReducers } from 'redux'

const initialState = [
  {
    id: '1',
    title: '课程1',
    likes: '2'
  },
  {
    id: '2',
    title: '课程2',
    likes: '3'
  }
]

const all = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  all
})
