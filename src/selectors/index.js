export const getCourses = state => state.course.all
export const getComments = state => state.comment.all 

export const getCommentsByCourseId = state => {
  return getComments(state).reduce((obj, t) => {
    obj[t.course] = obj[t.course] || []
    obj[t.course].push(t)
    return obj
  }, {})
}

export const getCoursesById = state => {
  return getCourses(state).reduce((obj, t) => {
    obj[t.id] = t
    return obj
  }, {})
}
