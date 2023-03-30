import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";


const Card = ({ activityList }) => {

    const {id, name, url, telephone, image, tags} = activityList;
    
    
    const navigate = useNavigate();

    const onHandleClick = () => {
        navigate(`/activities/${id}`)
    } 

    return(
        <div className={styles.Card} onClick={onHandleClick}>
            <img src={image} alt={name} />
            <div className={styles.text}>
            <h3>{name}</h3>
            <p>Phone: {telephone}</p>
            <p>Site: {url} </p>
            
            <p>#{tags}</p>

            </div>
        </div>
    )
}

export default Card;