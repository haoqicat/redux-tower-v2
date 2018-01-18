import React, { Component } from 'react'
import styled from 'styled-components'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'

class CommentForm extends Component {
  state = {
    body: '',
    user: ''
  }

  bodyChange = e => {
    e.preventDefault()
    this.setState({
      body: e.target.value
    })
  }

  userChange = e => {
    e.preventDefault()
    this.setState({
      user: e.target.value
    })
  }

  handleClick = e=> {
    e.preventDefault()
    const { body, user } = this.state
    const comment = {
      body,
      user
    }
    console.log('comment', comment)
    this.setState({
      body: '',
      user: ''
    })
  }
  render() {
    const { user, body } = this.state
    return (
      <Wrap>
        <NameInput
          value={user}
          onChange={this.userChange}
          placeholder="名字"
        />
        <CommentInput
          value={body}
          onChange={this.bodyChange}
          placeholder="评论"
        />
        <Button onClick={this.handleClick}
          raised color="accent" >
          评论
        </Button>
      </Wrap>
    )
  }
}

export default CommentForm

const Wrap = styled.div`
  display: flex;
`

const CommentInput = styled(Input)`
  flex-grow: 1;
  margin-right: 10px;
`

const NameInput = styled(Input)`
  margin-right: 10px;
`
