import { useState } from "react";
import { productsList } from "./mocks/mock";
import ListProducts from "./components/ListProducts/ListProducts";
import Hero from "./components/hero";
import Slider from "./components/slider";
import Control from "./components/control/Control";
import Modal from "./components/modal";
import ImgProduct from "./components/imgProduct";

import './app.css';
import Button from "./components/button";

const App = () => {
const [isModalOpen, setModalOpen] = useState(true);
const [isDarkMode, setDarkMode] = useState(true);
const [singleProductModal, setSingleProductModal] = useState(null);
  
return (
    <div className={`App ${isDarkMode && "dark-mode"}`}>
      <Hero />
      <Slider />
      
      <Control listaDataLength={productsList.length}/>
    <ListProducts listData={productsList} 
    setSingleProductModal= {setSingleProductModal}/>
    

    <Button className= "night-shift" onClick = {() => setDarkMode ((prev) => !prev)}>
      {isDarkMode ? "*" : "🌚"}
    </Button>
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
