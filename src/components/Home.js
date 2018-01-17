import React, { Component } from 'react'
import CourseCardContainer from '../containers/CourseCardContainer'
import styled from 'styled-components'

class Home extends Component {
  render() {
    const { courses } = this.props
    const list = courses.map(t => (
      <CourseCardContainer key={t.id} course={t} />
    ))
    return <Wrap>{list}</Wrap>
  }
}

export default Home

const Wrap = styled.div`
  display: flex;
  width: 700px;
  margin: 20px auto;
  justify-content: space-between;
`
