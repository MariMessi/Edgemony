import images from "../images";
import "./index.css";

const Gallery = ({ images }) => {
    return (
        <div className="Gallery">
            <img src={images} alt= "Gallery" />
        </div>
    )
}


export default Gallery;
