import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render(props) {
    const {todos} = this.props
    return (
      <div>
        <h2>Todos:</h2>
        <ul>
          {todos.map(todo=>{
            return <Todo key={todo.id} todo={todo} />
          })}
        </ul>
      </div>
    )
  }
}
