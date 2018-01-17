import React, { Component } from 'react'
import HomeContainer from '../containers/HomeContainer'
import CourseContainer from '../containers/CourseContainer'
import Header from '../components/Header'
import '../assets/global.css'
import history from '../utils/history'
import styled from 'styled-components'
import {
  Router,
  Route
} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Router history={history}>
        <Wrap>
          <div className="header">
            <Header />
          </div>
          <div className="main">
            <div className="inner">
              <Route exact path='/' component={HomeContainer} />
              <Route path='/c/:id' component={CourseContainer} />
            </div>
          </div>
        </Wrap>
      </Router>
    )
  }
}

export default Main

const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .main {
    flex-grow: 1;
    position: relative;
  }
  .inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
