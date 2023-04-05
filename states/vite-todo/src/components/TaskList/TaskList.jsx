import { useState, useEffect, useContext } from "react";
import { Context } from "../../store";
// import { GET } from "../../utils/http";
import styles from "./index.module.scss";
import Task from "../task/Task";


const TaskList = () => {
  // const {state, dispatch} = useContext(Context);

  // useEffect(() => {
  //   GET("todos").then((res) => {
  //     dispatch({ type: "SET_TASKS_LIST", payload: res.todos });
  //   });
  // }, []);

  const {state} = useContext(Context);


    return(
        <div className={styles.TasksList}>
        {state.tasksListData.map((task) => (
         <Task key={task.id} taskData={task}/>
        ))}
      </div>
    )
}

export default TaskList;