import { useState, useEffect } from "react";
import ModalCart from "../modalCart";
import "./index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ cartListLength }) => {
 const [isModalOpen, setModalOpen] = useState(false);

 const toggleModal = () => setModalOpen(!isModalOpen);
    return (
        <div className="Navbar">
            <ul className="navlist">
                <li className="items">Home</li>
                <li className="items">Contacts</li>
                <li className="items">About us</li>
            </ul>
            <form className="Hero__form">
                <input 
                className="Hero__form_input"
                type="text"
                value=""
                onChange=""
                placeholder= "cerca una categoria..." />
            </form>
            <div className="navbar_cart">
                <p>{cartListLength}</p>
            <button className="cart" onClick={toggleModal}><AiOutlineShoppingCart /></button>
            <ModalCart isModalOpen={isModalOpen} toggleModal={toggleModal}/>
            </div>
  
        </div>
    )
}


export default Navbar;