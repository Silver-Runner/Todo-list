import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  const handlechange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div>
      <form className='TodoForm' onSubmit={handlesubmit}>
        <input type="text"
        className='todo-input' 
        value={value}
        placeholder="What is your task?" 
        onChange={handlechange}/>
        <button type="submit" className='todo-btn'>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm;
