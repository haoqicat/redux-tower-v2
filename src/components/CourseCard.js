import React, { Component } from 'react'
import styled from 'styled-components'
import Actions from './CourseCardActions'
import Card from 'material-ui/Card'
import heart from '../assets/heart.png'

class CourseCard extends Component {
  render() {
    const { course } = this.props
    return (
      <Wrap>
        <Poster>
          {course.title}
          <div className="likes-heart">{course.likes}</div>
        </Poster>
        <Actions {...this.props} />
      </Wrap>
    )
  }
}

export default CourseCard

const Wrap = styled(Card)`
  width: 300px;
  position: relative;
  .likes-heart {
    background: url(${heart}) center no-repeat;
    background-size: contain;
    font-size: 10px;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #ff4081;
    transform: translateX(-50%) translateY(-50%) scale(1);
    transition: all .5s;
  }
`

const Poster = styled.div`
  background: #b369e2;
  height: 160px;
  color: white;
  font-size: 21px;
  text-align: center;
  line-height: 160px;
`
