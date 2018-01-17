import React, { Component } from 'react'
import HomeContainer from '../containers/HomeContainer'
import CourseContainer from '../containers/CourseContainer'
import Header from '../components/Header'
import '../assets/global.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={HomeContainer} />
          <Route path='/c/:id' component={CourseContainer} />
        </div>
      </Router>
    )
  }
}

export default Main
