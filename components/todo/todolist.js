import React from 'react';
import ToDo from './ToDo';
 
const ToDoList = ({toDoList, handleToggle}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo id={todo.id}   key={todo.id + todo.task} 
                   name="todo" value={todo.id} 
                   todo={todo} handleToggle={handleToggle}    />
               )
           })}
       </div>
   );
};
 
export default ToDoList;