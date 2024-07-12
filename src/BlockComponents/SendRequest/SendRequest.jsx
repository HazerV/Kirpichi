import styles from './send_req.module.scss'
import {Link} from "react-router-dom";

function SendRequest() {
    return (
        <Link className={styles.no_underline} to={'/sendRequest'}>
            <div className={styles.container}>
                <p className={styles.text_inside}>
                    Отправить заявку
                </p>
            </div>
        </Link>
    )
}

export default SendRequest
