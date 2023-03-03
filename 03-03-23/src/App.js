import { useState } from 'react';
import Control from "./components/control";
import Hero from "./components/hero";
import ImgProduct from "./components/ImgProduct";
import ListProducts from './components/listProducts';
import Modal from './components/modal';
import Slider from './components/slider';
import './App.css';

const App = () => {
  const [isDarkmode, setDarkmode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(true);
  const [singleProductModal, setSingleProductModal] = useState(null);

  return (
    <div className={`App ${isDarkmode && "dark_mode"}`}>
    <Hero />
    <Slider />
   
    <ListProducts setSingleProductModal={setSingleProductModal} />
    

    <button className= "toggle-mode" onClick = {() => setDarkMode ((prev) => !prev)}>
      {isDarkMode ? "*" : "🌚"}
    </button>
    {isModalOpen ? <Modal setModalOpen = {setModalOpen}/> : null}
    {singleProductModal  ? (
      <ImgProduct
      product={singleProductModal}
      setSingleProductModal = {setSingleProductModal}/>
    ) :null}
    <Modal />

    </div>
  );
}

export default App;
