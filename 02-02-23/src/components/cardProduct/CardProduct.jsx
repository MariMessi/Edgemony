import Button from "../button";
import "./index.css";


const CardProduct = ({ productData, setSingleProductModal }) => {
 const onGetDiscount = () => alert (`La percenduale di sconto è del ${productData.discountPercentage}%`);
 const onImageClick = () => {
    setSingleProductModal(() => productData);
 };
    return (
    <div className = "CardProduct">
    <img onClick={onImageClick} src = {productData.thumbnail} alt= {productData.title} />
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