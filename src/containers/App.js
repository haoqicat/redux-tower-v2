import React, { Component } from 'react'
import Main from '../components/Main'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import cyan from 'material-ui/colors/cyan'

const theme = createMuiTheme({
  palette: {
    primary: cyan
  }
})

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    )
  }
}

export default App
