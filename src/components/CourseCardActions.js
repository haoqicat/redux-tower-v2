import React, { Component } from 'react'
import styled from 'styled-components'
import history from '../utils/history'

class CourseCardActions extends Component {
  render() {
    const { commentsByCourseId, course, like } = this.props
    const { id, likes } = course
    const comments = commentsByCourseId[id] || []
    return (
      <Wrap>
        <Button onClick={() => like(id)}>
          {likes}赞
        </Button>
        <Button onClick={() => history.push(`/c/${id}`)}>
          {comments.length}评论
        </Button>
      </Wrap>
    )
  }
}

export default CourseCardActions

const Wrap = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`
const Button = styled.div`
  display: flex;
  background-color: rgb(242, 244, 246);
  color: rgb(76, 87, 101);
  padding: 2px 9px;
  :hover {
    cursor: pointer;
  }
`
