import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import { getCourses } from '../selectors'

const HomeContainer = props => <Home {...props} />

const mapStateToProps = state => ({
  courses: getCourses(state)
})

export default connect(mapStateToProps)(HomeContainer)
