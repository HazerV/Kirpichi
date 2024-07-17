import React from "react";
import styles from './button_for_pag.module.scss'

function FilledPaginationButton ({count, status}) {
    return (
        <button className={styles.container_fill}>
            <p className={styles.filled_text}>
                {count}
            </p>
        </button>
    )
}

function UnfilledPaginationButton ({count, onClick}) {
    return (
        <button className={styles.container_unfill} onClick={onClick}>
            <p className={styles.unfilled_text}>
                {count}
            </p>
        </button>
    )
}

export {
    UnfilledPaginationButton,
    FilledPaginationButton
}
