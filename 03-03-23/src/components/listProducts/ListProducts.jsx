import { useState, useEffect } from "react";
import CardProduct from "../cardProduct";
import "./index.css";

const ListProducts = ({ setSingleProductModal }) => {
    const [listData, setListData] = useState([]);
    
useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw response; 
    })
    .then(data => {
        setListData(data.products)
    })

   },[]);

return (
        <div className="ListProducts">
        {listData.map((product) => (
            <CardProduct productData={product} key={product.id} />
        ))}
    </div>
    );
};

export default ListProducts



