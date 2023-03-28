import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss";

export default function Home() {


  return (
    <div className={styles.Home}>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
        <li> 
          <Link to="/activity">Activities</Link>
          </li>
        <li> 
          <Link to="/city">Cities</Link>
          </li>
        <li> 
          <Link to="/about">About</Link>
          </li>
      </ul>
    </div>
  )
}


