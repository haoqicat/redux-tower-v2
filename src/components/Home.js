import React, { Component } from 'react'

class Home extends Component {
  render() {
    const { courses } = this.props
    console.log(courses)
    return (
      <div>
        Home
      </div>
    )
  }
}

export default Home
