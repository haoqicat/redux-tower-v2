import React from 'react'
import Course from '../components/Course'
import { connect } from 'react-redux'
import { getCommentsByCourseId, getCoursesById } from '../selectors'

const CourseContainer = props => <Course {...props} />

const mapStateToProps = state => ({
  commentsByCourseId: getCommentsByCourseId(state),
  coursesById: getCoursesById(state)
})
export default connect(mapStateToProps)(CourseContainer)
