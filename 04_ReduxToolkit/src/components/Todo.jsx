import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <h1>My Todos</h1>
            <div>
                {todos.map((todo) => 
                   (
                    <li  id='todo' key={todo.id}>
                    {todo.text}
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                    >Remove</button>
                </li>
                   )

                )}

            </div>
        </>
    )
}

export default Todo
