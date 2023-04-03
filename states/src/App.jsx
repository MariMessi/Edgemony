import { createContext, useContext, useReducer } from 'react';
import Counter from './counter';
import { CounterContext, initialValue } from './store';
import { counterReducer } from './store/reducers';
import './App.css';





function App() {
 
const [state, dispatch] = useReducer(counterReducer, initialValue);
  return (
    <div className="App">
   <CounterContext.Provider value={{state, dispatch}}>
   <Counter />
   </CounterContext.Provider>
    </div>
  )
}

export default App
