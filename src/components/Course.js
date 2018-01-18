import React, { Component } from 'react'
import styled from 'styled-components'
import CommentList from './CourseCommentList'
import Card from 'material-ui/Card'
import CommentForm from './CourseCommentForm'

class Course extends Component {
  render() {
    const {
      commentsByCourseId,
      match,
      coursesById
    } = this.props
    const { id } = match.params
    const comments = commentsByCourseId[id] || []
    const course = coursesById[id] || {}
    return (
      <Wrap>
        <Upper>
          {course.title}
        </Upper>
        <Lower>
          <CommentWrap>
            <CommentForm id={id} />
            <CommentList comments={comments} />
          </CommentWrap>
        </Lower>
      </Wrap>
    )
  }
}

export default Course

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Upper = styled.div`
  background: #00bcd4;
  text-align: center;
  font-size: 25px;
  color: white;
  line-height: 8em;
`

const Lower = styled.div`
  min-height: 60vh;
  background-color: #eeeeee;
  padding-top: 50px;
  flex-grow: 1;
`

const CommentWrap = styled(Card)`
  background: #fff;
  min-height: 10vh;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
`
