import React from 'react'

export default function TodoList(props) {
  return (
    <div className='todo-item1'>
      {props.todos && props.todos.map(todo => (
        <div className='todo-item' key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={()=>props.deleteTodoHandler(todo.id)}>Done!</button>
        </div>
      ))}
    </div>
  )
}
