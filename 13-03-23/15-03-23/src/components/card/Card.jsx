import "./index.css";

const Card = ({ productData }) => {
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
        </div>
    );
};

export default Card;