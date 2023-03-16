import "./index.css";

const ModalCartItem = ({ productData }) => {

    return (
        <div className="ModalCartItem">
                 <h2>{productData.title}</h2>
                <p>{productData.description}</p>
                <p>{productData.price}</p>
        </div>
    );
};

export default ModalCartItem;