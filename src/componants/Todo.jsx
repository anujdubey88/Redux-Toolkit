import React from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react'
import { addTodo, removeTodo } from '../Feature/Todo/TodoSlice'

export default function Todo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    const addItem = (e) => {
        e.preventDefault();
        if (input.trim()) {
          dispatch(addTodo(input));
          setInput("");
        }
      }

  return (
    <div>
      <div className='Todo'>
        <h1>Todo</h1>
        <div className='input'>
          <input
            type="text"
            placeholder='Enter Todo'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className='addbutton' onClick={addItem}>ADD</button>
        </div>
        <h3>Todo List</h3>
        <div className='todolist'>
          {todos.length === 0 && <h3>Insert Your Todos</h3>}
          {todos.map((todo) => (
            <div className='todos' key={todo.id}>
              <p>{todo.title}</p>
              <button className='button' onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
