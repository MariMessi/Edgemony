import Button from "../button";
import "./index.css";

const Control = ({ listaDataLength }) => {
    const getProductsNum = ()  => alert(`Il numero di prodotti disponibile è: ${listaDataLength}`);

    return (
        <div className="Control">
            <Button 
            text= "Prodotti rimasti"
            clickFunc={getProductsNum}
            isDisabled= {false} />
        </div>
    );
};

export default Control;