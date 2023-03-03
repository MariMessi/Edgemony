import "./index.css";
import { useState } from "react";


const Slider = () => {
 const images = [
    "https://picsum.photos/1200/500?random=1",
    "https://picsum.photos/1200/500?random=2",
    "https://picsum.photos/1200/500?random=3"
 ];
 const [actualImg, setActualImg] = useState(0);

    return (
        <div className = "Slider">
        <button className="slider_button" onClick={() => setActualImg(actualImg - 1)}>{'<'}</button>    
        <img src={images[actualImg]} alt="img" />
         <button className="slider_button"  onClick={() => setActualImg(actualImg + 1)}>{'>'}</button>
    </div>
    );
};

export default Slider