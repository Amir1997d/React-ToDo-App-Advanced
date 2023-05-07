import React from 'react'

export default function Todos(props) {
    return (
        <form className='todos-form' onSubmit={props.addTodoHandler}>
            <input 
                type='text'
                placeholder='Add a New To-Do...'
                onChange={(event) => props.setTodoInput(event.target.value)} 
                value={props.todoInput} />
            <button onClick={props.addTodoHandler}><i className="fa-solid fa-plus"></i></button>
        </form>
    )
}
