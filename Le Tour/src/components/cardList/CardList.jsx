import activityList from "../../mocks/mock";
import Card from "../card";
import styles from "./index.module.scss";


const CardList = () => {

    return(
        <div className={styles.CardList}>
            {activityList.map((activity) => (
                <Card activityList={activity} key={activity.id} />
            ))}

        </div>
    )
}

export default CardList;