import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Activity.module.scss";

export default function Activity() {

    return(
        <div className={styles.Activity}>
            <h2>Activity</h2>
            <Outlet />
        </div>
    )
}