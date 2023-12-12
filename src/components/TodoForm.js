import { useState } from "react";
import React from 'react';

export const TodoForm = ({addTodo}) => {
  const [ value, setValue ] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
  }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit} >
        <input type='text' className='todo-input' placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add Task</button>
      </form>
    </div>
  );
};


export default TodoForm;
