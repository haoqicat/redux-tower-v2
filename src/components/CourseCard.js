import React, { Component } from 'react'
import styled from 'styled-components'
import Actions from './CourseCardActions'
import Card from 'material-ui/Card'
import { CSSTransition } from 'react-transition-group'
import heart from '../assets/heart.png'

class CourseCard extends Component {
  state = {
    showHeart: false
  }

  showHeart = () => {
    this.setState({
      showHeart: true
    })
    setTimeout(
      () => {
        this.setState({
          showHeart: false
        })
      }
      , 1000
    )
  }
  render() {
    const { course } = this.props
    const { showHeart } = this.state
    return (
      <Wrap>
        <Poster>
          {course.title}
          <CSSTransition in={showHeart} timeout={1000} classNames="like">
            <div className="likes-heart">{course.likes}</div>
          </CSSTransition>
        </Poster>
        <Actions {...this.props}  showHeart={this.showHeart} />
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
    opacity: 0;
    transition: all .5s;
  }
  .like-enter.likes-heart {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(5);
  }
`

const Poster = styled.div`
  background: #b369e2;
  color: white;
  font-size: 21px;
  text-align: center;
  padding: 60px 0;
`
