import React, { Component } from 'react'
import styled from 'styled-components'
import Actions from './CourseCardActions'
import Card from 'material-ui/Card'

class CourseCard extends Component {
  render() {
    const { course } = this.props
    return (
      <Wrap>
        <Poster>
          {course.title}
        </Poster>
        <Actions {...this.props} />
      </Wrap>
    )
  }
}

export default CourseCard

const Wrap = styled(Card)`
  width: 300px;
`

const Poster = styled.div`
  background: #b369e2;
  heigth: 160px;
  color: white;
  font-size: 21px;
  text-align: center;
  line-height: 160px;
`
