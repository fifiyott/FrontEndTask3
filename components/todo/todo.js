import React from 'react';

import styles from  '../../styles/todo.module.sass'
const ToDo = ({todo, handleToggle}) => {
 
     
    const handleClick = (e) => {
         e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} 
        onClick={handleClick} 
        className={todo.complete ? styles.strike : styles.todo}>
            {todo.task}
        </div>
    );
    
};
 
export default ToDo;