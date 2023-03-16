import { useState } from "react";
import ModalCartItem from "../ModalCartItem";
import "./index.css";


const ModalCart = ({ productData, setProductList }) => {
    const [isModalvisible, setModalVisible] =useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [cartContent, setCartContent] = useState({
        productData: {},
        isModalvisible: true,
    });

    const onHandleClose = () => 
    setModalVisible
  
    return ( 
        <div className="ModalCart">
      <ModalCartItem productData={cartContent.productData}
      setCartContent={setCartContent} />
        </div>
    );
};

export default ModalCart;