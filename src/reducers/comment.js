import { combineReducers } from 'redux'

const initialState = [
  {
    id: '1',
    user: 'peter',
    body: '很有意思',
    course: '1'
  },
  {
    id: '2',
    user: 'billie',
    body: 'nice',
    course: '2'
  },
  {
    id: '3',
    user: 'Jay',
    body: 'cool',
    course: '2'
  }
]

const all = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default combineReducers({
  all
})
