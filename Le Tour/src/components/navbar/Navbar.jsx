import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  const navigaye = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    Navigate(`activities/${inputValue}`);
    setInputValue(()=> "");
  };
    return(
        <div className={styles.Navbar}>
     <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
        <li> 
          <Link to="/activities">Activities</Link>
          </li>
        <li> 
          <Link to="/city">Cities</Link>
          </li>
        <li> 
          <Link to="/about">About</Link>
          </li>
     </ul>
     <div className={styles.search}>
      <form onSubmit={onHandleSubmit}>
        <input type="text" placeholder="Cosa vuoi cercare?" value={inputValue} onChange={onHandleInput} />
      </form>
     </div>

        </div>
    )
}

export default Navbar;