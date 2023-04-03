import { useState, useContext, useReducer } from "react";
import { CounterContext } from "../store";
import { counterReducer } from "../store/reducers";
import "./index.css";




 const Counter = () => {
//   const [value, setValue] = useState(0);

//   const onHandleClick = (e) => { e.target.className === "increment" 
//   ? setValue((prev) => prev +1)
//   : setValue((prev) => prev -1);

//   }

const {state, dispatch} = useContext(CounterContext);
const onHandleClick = (e) => dispatch({type: e.target.className});
const counter = useContext(CounterContext);
    

    return(
    //     <div className="Counter">
    //   <button className="increment" onClick={onHandleClick}>Incrementa</button>
    //   <p>{value}</p>
    //   <button className="decrement" onClick={onHandleClick}>Decrementa</button>
    //     </div>

    <div className="Counter">
        <button className="decrement" onClick={onHandleClick}> - </button>
            <p className="counterState">{state.value}</p>
        <button className="increment" onClick={onHandleClick}> + </button>
    
      </div>
    )
} 

export default Counter;

