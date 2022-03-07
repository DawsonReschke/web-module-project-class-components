import React from 'react'

export default class Form extends React.Component {
  render() {
    const {todoText,onChange,addTodo} = this.props
    return (
      <form>
        <input
          value={todoText}
          onChange={onChange}
          type={'text'}
          placeholder='todo name'
          />
        <input
          type={'submit'} 
          onClick={addTodo}
          /> 
      </form>
    )
  }
}
