import CardList from "./components/cardList";
import MiniCardList from "./components/miniCardList/";
import Navbar from "./components/navbar"
import { GET } from "./utils/http";
import './App.css'

function App() {


  return (
    <div className="App">
     
      <Navbar />
  <h2>APP</h2>
  <MiniCardList endpoint="/products"/>
  <CardList title="CardList" endpoint="/products"/>
    </div>
  )
}

export default App
