import { useContext } from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
    const {state, dispatch} = useContext(Context);
    
    const onHondleModalClose = () =>
    dispatch({ type: "SET_MODAL_VISIBILITY", payload: false });

    const onHandleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "ADD_NEW_TASK", payload: state.tempTodo });
    dispatch({ type: "SET_MODAL_VISIBILITY", payload: false});
    };

    const onChangeUsername = (e) =>
    dispatch({type: "SET_TODO_USERNAME", payload: e.target.value});

    const OnChangeTodo = (e) => 
    dispatch ({ type: "SET_TODO_TODO", payload: e.target.value})

    const onChangeImage = (e) => {
    dispatch ({type: "SET_TODO_IMAGE", payload: e.target.value});
    dispatch ({type: "SET_TODO_ID"});
    };

    return(
        <div className={styles.Modal}>
            <div onClick={onHondleModalClose} className={styles.overlay}></div>
            <form onSubmit={onHandleFormSubmit} className={styles.content}>
                <h3>Add a todo</h3>
                <input
                value={state.tempTodo.username}
                onChange={onChangeUsername}
                type="text"
                placeholder="Username"
                required />

                <input
                value={state.tempTodo.todo}
                onChange={OnChangeTodo}
                type="text"
                placeholder="what to do?"
                required />

                 <input
                value={state.tempTodo.image}
                onChange={onChangeImage}
                type="text"
                placeholder="Image URL"
                required />

                <input className={styles.InputBtn} type="submit" value="Add" />
            </form>
             </div>
    );
};

export default Modal;