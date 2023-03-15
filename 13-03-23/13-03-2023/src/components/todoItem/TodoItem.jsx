

import { useState } from "react";
import "./index.css";

const TodoItem = ({item, setTodo}) => {
    const onHandleClick = () => {
        setTodo((prev) => [
            ...prev.filter((todo) => todo.id !== item.id),
            {
                id: item.id,
                todo: item.todo,
                completed: !item.completed, 
            },
        ]);
    };

   

    function onHandleRemoveItem() {
        setTodo ((prev) => [
            ...prev.filter((item) => item.todo !== todo),
        {
            id:"",
            todo: "",
            completed: "",
        },
    ])
    }



    return (
        <div className="TodoItem">
            <li
            onClick={onHandleClick}
            className = "item">
                {item.todo}
            </li>
            <button className="bin" onClick={() => onHandleRemoveItem(item.todo)}><img src="https://img.icons8.com/material-rounded/24/null/filled-trash.png"/></button>
        </div>

    );
};


export default TodoItem;