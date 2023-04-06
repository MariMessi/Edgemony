import Link from "next/link";
import styles from "./index.module.scss";



const Header = () => {

    return(
        <div className={styles.Header}>
            <ul>
                <li><Link href="/"> Home </Link></li>
                <li><Link href="/about"> About </Link></li>
            </ul>
        
        </div>
    )
}

export default Header;