import React,{useState} from 'react'

const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    editTodo(value,task.id);
    setValue("");
  }
  const handlechange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div>
      <form className='EditTodoForm' onSubmit={handlesubmit}>
        <input type="text"
        className='todo-input' 
        value={value}
        placeholder="Update your task" 
        onChange={handlechange}/>
        <button type="submit" className='todo-btn'>Update Task</button>
      </form>
    </div>
  )
}

export default EditTodoForm;

