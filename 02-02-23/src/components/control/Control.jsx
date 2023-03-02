import Button from "../button";
import "./index.css";


const Control = ({ listaDataLength }) =>{
    const getProductsNum = () => 
    alert(`Ci sono ${listaDataLength} prodotti in stock`);
    return (
        <div className="Control">
            <Button text = "Prodotti in magazzino"
            clickFunc={getProductsNum}
            isDisabled={false} />
        </div>
    );
};

export default Control 