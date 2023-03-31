import {GET} from "../../utils/http"
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../../components/cardList/CardList";
import styles from "../../styles/Activities.module.scss";



export default function Activities() {
    const [searchParams] = useSearchParams();
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
     {searchParams.get("time") && (
        <h1>
          Appuntamento confermato, ci vediamo alle {searchParams.get("time")}!
        </h1>
      )}
            <CardList data={filteredList(itemList, "electronics")} />
        </div>
    ); 
}