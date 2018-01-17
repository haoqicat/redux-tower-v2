import React, { Component } from 'react'
import HomeContainer from '../containers/HomeContainer'
import CourseContainer from '../containers/CourseContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/c/:id' component={CourseContainer} />
        </div>
      </Router>
    )
  }
}

export default Main
