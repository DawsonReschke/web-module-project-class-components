import React from 'react'

export default class Todo extends React.Component {
  render(props) {
    const {todo,toggleCompleted} = this.props
    return (
      <div>
        <p style={{color: todo.completed ? "red":"black"}} onClick={()=>{toggleCompleted(todo.id)}} >{todo.name}</p>
      </div>
    )
  }
}
