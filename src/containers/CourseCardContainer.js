import React from 'react'
import CourseCard from '../components/CourseCard'
import { connect } from 'react-redux'
import { getCommentsByCourseId } from '../selectors'
import { like } from '../actions'

const CourseCardContainer = props => <CourseCard {...props} />

const mapStateToProps = state => ({
  commentsByCourseId: getCommentsByCourseId(state)
})

export default connect(mapStateToProps, {
  like
})(CourseCardContainer)
