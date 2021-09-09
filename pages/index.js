import React, { useState } from 'react';
import ToDoList from '../components/todo/todolist';
import data from "../data-dummy/data.json";

export default function Home() {
  const [ toDoList, setToDoList ] = useState(data);
  const [ userInput, setUserInput ] = useState('');

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
}

const handleSubmit = (e) => {
  e.preventDefault();
  addTask(userInput);
  setUserInput("");

}
const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
  setToDoList(copy);
}
  return (
   <div>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle}    />
      <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>

      <form>
      <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
      <input type="button" onClick={handleSubmit} value="tambah"/>
      </form>

   </div>
  )
}