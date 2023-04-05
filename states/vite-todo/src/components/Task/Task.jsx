import { useState, useEffect, useContext } from "react";
import {GET} from "../../utils/http";
import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss"
import { Context } from "../../store";



const Task = ({ taskData }) => {
    // const [userData, setUserData] = useState({});

    // useEffect(() => {
    //     GET(`users/${taskData.userId}`).then((data) => setUserData(data));
    //   }, []);
const {store, dispatch} = useContext(Context);

const onHandleSetTaskCompleted = () => {
  dispatch({type: "SET_TASK_COMPLETED", payload: taskData.id});
};

const onHandleDeleteTask = () => {
  dispatch ({type: "DELETE_TASK", payload: taskData.id})
}
    return(
        <div className={styles.Task}>
     <div className={styles.info}>
        <img src={userData.image} alt={userData.username} />
        {taskData.completed && <button onClick={onHandleDeleteTask}>V</button>}
      </div>
      <div className={styles.content}>
        <span>{userData.username}</span>
        <p onClick={onHandleSetTaskCompleted}>{taskData.todo}</p>
      </div>
        </div>
    );

};


export default Task;



