import styles from './status_indicator.module.scss'
import React from "react";

function StatusIndicator ({text}) {

    const [is_active, setActive] = React.useState(false)

    if (is_active === true) {
        return (
            <div className={styles.container_active}>

            </div>
        )
    } else {
        return (
            <div className={styles.container_non_active}>

            </div>
        )
    }

}

export default StatusIndicator
