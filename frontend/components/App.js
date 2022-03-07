import React from 'react'
import TodoList from './TodoList';
import TodoFrom from './Form'
const initialState ={
  todos:[
    {
      name:'Create react app',
      completed:true,
      id:new Date().getMilliseconds(),
    }
  ],
  todoText:'',
  hidingCompleted: false
}

const createNewTodo = (name) =>{
  return {name,completed:false,id:new Date().getMilliseconds()}
}


export default class App extends React.Component {
   state = initialState

  onChange = (evt) => this.setState({...this.state,todoText:evt.target.value})

  addTodo = (evt) => {
    const {todos, todoText} = this.state
    this.setState({
      ...this.state, todos: [...todos,createNewTodo(todoText)], todoText:''
    })
  }

  toggleCompleted = (id) =>{
    const {todos} = this.state
    this.setState({
      ...this.state,
      todos: todos.map(todo => todo.id === id ? 
        {...todo,completed:!todo.completed}:
        todo)
    })
  }

  toggleShowingCompleted = () => {
    this.setState({...this.state, hidingCompleted: !this.state.hidingCompleted})
  }

  render() {
    const {todos,todoText,hidingCompleted} = this.state;
    return (
      <div>
        <TodoList 
          hidingCompleted={hidingCompleted}
          todos={todos} 
          toggleCompleted={this.toggleCompleted}
          />
        <TodoFrom 
          onChange={this.onChange} 
            todoText={todoText}
            addTodo={this.addTodo}
            />
        <button onClick={this.toggleShowingCompleted}>{hidingCompleted ? "Show Completed" : "Hide Completed"}</button>
      </div>
    )
  }
}
