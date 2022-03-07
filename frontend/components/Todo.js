import React from 'react'

export default class Todo extends React.Component {
  render(props) {
    const {todo} = this.props
    return (
      <div>
        <p>{todo.name}</p>
      </div>
    )
  }
}
