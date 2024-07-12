import styles from './status_indicator.module.scss'
import {useState} from "react";

function StatusIndicator ({status}) {

    const [is_active, setActive] = useState(false)
    function handleClick () {
        if (is_active === true) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    if (is_active === true) {
        return (
            <div onClick={handleClick} className={styles.container_active}>
                <div className={styles.inside} />
            </div>
        )
    } else if (is_active === false) {
        return (
            <div onClick={handleClick} className={styles.container_non_active} />
        )
    }

}

export default StatusIndicator
