import { Link, Outlet } from "react-router-dom";
import styles from "../styles/City.module.scss";

export default function City() {

    return(
        <div className={styles.City}>
            <h2>City</h2>
            <Outlet />
        </div>
    )
}