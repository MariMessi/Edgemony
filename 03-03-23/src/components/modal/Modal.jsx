import "./index.css";
import Button from "../button";

const Modal = ({ setModalOpen }) => {
  return (
    <div className = "Modal">
    <div className="Modal_content">
        <h3>Accetta i cookies</h3>
        <Button style= {{backgroundColor: '#5f9ea0', color: 'white'}} text ="Non Accetto" clickFunc={() => alert("devi accettre per forza, non hai via di scampo!")} />
        <Button text ="Accetto" clickFunc={() => setModalOpen((prev) => false)} />
    </div>
</div>
  );
};

export default Modal;