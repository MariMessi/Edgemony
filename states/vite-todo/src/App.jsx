import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import Modal from "./components/modal";
import styles from "./App.module.scss";
import TaskList from "./components/taskList";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const onHandleAddTodoBtn = () =>{
    dispatch({type: "SET_MODAL_VISIBILIT", payload: true});
  }
  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
       <TaskList />
        <button onClick={onHandleAddTodoBtn}className={styles.addTodo}>{"+"}</button>
        {state.isModalVisible && <Modal />}
      </Context.Provider>
    </div>
  );
}

export default App;