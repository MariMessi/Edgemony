import { useState } from "react";
import "./index.css";

const TodoForm = ({setTodo}) => {
    const [todoValue, setTodoValue] = useState("");

    const onHandleSubmit = (e) => {
        e.preventDefault();

        setTodo((prev) => [
            ...prev,
            {
                id: prev.length +1,
                content: todoValue,
                completed: false,
            },
        ]);
        setTodoValue("");
    };

    const onInputChange = (e) => setTodoValue(() => e.target.value);
        return (
        <div className="TodoForm">
            <form onSubmit={onHandleSubmit}>
                <input
                className="input" 
                type="text" 
                placeholder="Add a todo" 
                value= {todoValue}
                onChange = {onInputChange} 
                required/>
             
            <input  className= "submit" type= "submit" value="submit"/>
            </form>
       
        </div>
    );
};

export default TodoForm;