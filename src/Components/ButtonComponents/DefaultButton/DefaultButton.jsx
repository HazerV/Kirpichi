import styles from './default_button.module.scss'
import {Link} from "react-router-dom";
function DefaultButton({text, href}) {
    return (
        <Link to={`${href}`}>
            <button className={styles.container}>
                <p className={styles.text_inside}>
                    {text}
                </p>
            </button>
        </Link>
    )
}

export default DefaultButton
