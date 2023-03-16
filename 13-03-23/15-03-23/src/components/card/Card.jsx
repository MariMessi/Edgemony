import { useState } from "react";
import "./index.css";

const Card = ({ productData }) => {

 const [cartList, setCartList] = useState([]);

 const onHandleAddCart = () => {
    setCartList((prev) => [...prev, productData])
    console.log({productData})
 }
    return (
        <div className="Card">
            <img className="Card_image"
            src={productData.thumbnail}
            alt = {productData.title} />

            <div className="Card_Text">
                <h2>{productData.title}</h2>
                <p>{productData.description}</p>
                <p>{productData.price}</p>
            </div>
            <button className="addCart" onClick={onHandleAddCart}>Add to cart</button>
        </div>
    );
};

export default Card;