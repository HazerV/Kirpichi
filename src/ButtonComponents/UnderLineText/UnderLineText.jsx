import styles from './underline_text.module.scss'
import {Link} from "react-router-dom";

function UnderLineText({text, href}) {
    return (
        <div>
            <Link to={`${href}`} className={styles.text}>
                <p className={styles.text}>
                    {text}
                </p>
            </Link>
        </div>
    )
}

export default UnderLineText
