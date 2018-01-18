import React, { Component } from 'react'
import styled from 'styled-components'
import ThumbUp from 'material-ui-icons/ThumbUp'
import Comment from 'material-ui-icons/Comment'
import history from '../utils/history'

class CourseCardActions extends Component {
  render() {
    const { commentsByCourseId, course, like } = this.props
    const { id, likes } = course
    const comments = commentsByCourseId[id] || []
    return (
      <Wrap>
        <Button onClick={() => like(id)}>
          <ThumbUp />
          {likes}
        </Button>
        <Button onClick={() => history.push(`/c/${id}`)}>
          <Comment />
          {comments.length}
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
  line-height: 26px;
  svg {
    fill: #212121;
    width: 16px;
    height: 16px;
    margin: 5px;
    margin-left: 0;
  }
`
