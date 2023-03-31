import { useNavigate, useSearchParams  } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() { 

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [inputTime, setInputTime] = useState("");

  const onHandleClick = () => {
    navigate(`/activities?time=${inputTime}`);
  };

  const onHandleInput = (e) => {
    setInputTime(() => e.target.value);
  };

  return (
    <div className={styles.Home}>
      <h1>Home</h1>
     <p>Scegli uno slot orario</p>
     <input  value= {inputTime} onChange= {onHandleInput} type="time"/>
     <button onClick={onHandleClick}>Scegli un appuntamento</button>

    </div>
  );
}


