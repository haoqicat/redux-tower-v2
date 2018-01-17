import React, { Component } from 'react'
import styled from 'styled-components'

class CommentList extends Component {
  render() {
    const { comments } = this.props
    const list = comments.map(t => (
      <Comment key={t.id}>
        <User>{t.user}</User>
        <Body>{t.body}</Body>
      </Comment>
    ))
    return <Wrap>{list}</Wrap>
  }
}

export default CommentList

const Wrap = styled.div`
  padding: 10px 0;
  line-height: 30px;
`

const Comment = styled.div`
  display: flex;
  margin-bottom: 5px;
`

const User = styled.div`
  font-weight: 600;
  margin-right: 5px;
`

const Body = styled.div`
  flex-grow: 1;
`
