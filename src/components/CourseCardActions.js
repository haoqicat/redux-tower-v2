import React, { Component } from 'react'
import styled from 'styled-components'

class CourseCardActions extends Component {
  render() {
    return (
      <Wrap>
        <Button>
          12赞
        </Button>
        <Button>
          5评论
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
