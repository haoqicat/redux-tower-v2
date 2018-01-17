import React, { Component } from 'react'
import styled from 'styled-components'

class CourseCard extends Component {
  render() {
    const { course } = this.props
    return (
      <Wrap>
        {course.title}
      </Wrap>
    )
  }
}

export default CourseCard

const Wrap = styled.div`
  width: 300px;
  background: #b369e2;
  heigth: 160px;
  color: white;
  font-size: 21px;
  text-align: center;
  line-height: 160px;
`
