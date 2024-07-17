import styles from './send_req.module.scss'
import {Link} from "react-router-dom";

function SendRequest() {
    return (
        <div className={styles.container}>
            <Link className={styles.no_underline} to={'/sendRequest'}>
                <p className={styles.text_inside}>
                    Отправить заявку
                </p>
            </Link>
        </div>
    )
}

export default SendRequest
