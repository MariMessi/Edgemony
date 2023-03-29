import { useState, useEffect } from "react";
import CardList from "../../components/cardList/CardList";
import styles from "../../styles/Activities.module.scss";



export default function Activities() {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setItemList(data));
    }, [])
 const filteredList = (list, category) => 
 list.filter((item) => item.category === category);



    return(
        <div className={styles.Activities}>
            <CardList data={filteredList(itemList, "electronics")} />
        </div>
    ); 
}