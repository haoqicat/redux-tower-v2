import React, { Component } from 'react'
import styled from 'styled-components'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'

class CommentForm extends Component {
  render() {
    return (
      <Wrap>
        <NameInput
          placeholder="名字"
        />
        <CommentInput
          placeholder="评论"
        />
        <Button raised color="accent" >
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
