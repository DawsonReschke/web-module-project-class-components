import React from 'react'
import TodoList from './TodoList';
import TodoFrom from './Form'
const initialState ={
  todos:[
    {
      name:'Create react app',
      completed:true,
      id:new Date().toLocaleDateString(),
    }
  ],
  todoText:''
}

export default class App extends React.Component {
   state = initialState

  onChange = (evt) => {
    this.setState({
      ...this.state,
      todoText:evt.target.value
    })
  }

  render() {
    const {todos,todoText} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <TodoFrom onChange={this.onChange} todoText={todoText} addTodo={()=>console.log('implement')}/>
      </div>
    )
  }
}
