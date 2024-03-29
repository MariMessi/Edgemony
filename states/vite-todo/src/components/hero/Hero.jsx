import { useContext } from "react";
import { Context } from "../../store";
import { calcPercCompletedTasks } from "../../utils/funcs";
import styles from "./index.module.scss";

const Hero = () => {
  const { state } = useContext(Context);
    return(
        <div className={styles.Hero}>
          <h1>Good Morning</h1>
          <div className={styles.texts}>
          <p>
            Today's {new Date().toLocaleString("en-En", { weekday: "long" })}
          </p>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className={styles.completed}>
          <p>{calcPercCompletedTasks(state.tasksListData)}% Done</p>
          <span>Completed Tasks</span>
        </div>
       </div>
    );
};

export default Hero;