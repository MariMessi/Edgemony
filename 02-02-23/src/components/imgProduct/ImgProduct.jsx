import "./index.css";

const ImgProduct = ({product, setSingleProductModal}) => {


    return (
        <div className="ImgProduct">
            <div>
                className= "ImgProduct_overlay"
                onClick= {()=> setSingleProductModal(null)}
            </div>
            <img src = {product.images[0]} alt= {product.title} />
        </div>
    );

};

export default ImgProduct;