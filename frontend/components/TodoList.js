import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render(props) {
    const {todos, toggleCompleted,hidingCompleted} = this.props
    return (
      <div>
        <h2>Todos:</h2>
        <ul>
          {todos.map(todo=>{
            return hidingCompleted ? 
            !todo.completed && <Todo key={todo.id} toggleCompleted={toggleCompleted} todo={todo} />:
            <Todo key={todo.id} toggleCompleted={toggleCompleted} todo={todo} />
          })}
        </ul>
      </div>
    )
  }
}
