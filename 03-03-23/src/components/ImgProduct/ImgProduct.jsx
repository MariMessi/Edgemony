import "./index.css";

const ImgProduct = ({ product, setSingleProductModal }) => {
    return (
        <div className="ImgProduct">
            <div className="ImgProduct_overlay"
            onclick= {() => setSingleProductModal(null)}>
                <img src = {product.images} alt = {product.title} />
            </div>
        </div>
    );
};


export default ImgProduct;