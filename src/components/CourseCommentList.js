import React, { Component } from 'react'
import styled from 'styled-components'
import Delete from 'material-ui-icons/Delete'

class CommentList extends Component {
  render() {
    const { comments, deleteCmt } = this.props
    const list = comments.map(t => (
      <Comment key={t.id}>
        <User>{t.user}</User>
        <Body>{t.body}</Body>
        <Action onClick={() => deleteCmt(t.id)}>
          <Delete />
        </Action>
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

const Action = styled.div`
  cursor: pointer;
  svg {
    padding: 5px;
    width: 20px;
    height: 20px;
    display: block;
  }
`
