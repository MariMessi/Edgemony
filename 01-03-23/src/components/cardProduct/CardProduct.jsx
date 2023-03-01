import Button from "../button";
import "./index.css";


const CardProduct = ({ productData }) => {
 const onGetDiscount = () => alert (`La percenduale di sconto è del ${productData.discountPercentage}%`);
    return (
    <div className = "CardProduct">
    <img src = {productData.thumbnail} alt= {productData.title} />
    <div className = "textDiv">
        <h4>{productData.title}</h4>
        <p>{productData.brand}</p>
        <p>{productData.description}</p>
        <p>Price: €{productData.price}</p>
        <p>In stock: {productData.stock}</p>
        <Button text= "Discount" clickFunck={onGetDiscount} />

    </div>
    </div>
    );
};


export default CardProduct;