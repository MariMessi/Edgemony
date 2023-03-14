import TodoItem from "../todoItem";
import "./index.css";

const List = ({ todo, setTodo }) => {
    return (
        <div className="List">
            <ul>
                {todo.sort((item1, item2) => (item1.todo <= item2.todo ? "a" : "z"))
                .map((item)=> (
                    <TodoItem item={item} setTodo= {setTodo} key={item.id} />
                ))}
            </ul>
        </div>
    );
};


export default List;