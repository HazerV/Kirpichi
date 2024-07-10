import React from "react";
import styles from './sorting_field.module.scss'

function SortingField () {
    const [isActive, setIsActive] = React.useState(false)

    return (
        <div className={styles.container}>
            <p className={styles.text_non_active}>
                По популярности
            </p>
            <p className={styles.text_non_active}>
                По популярности
            </p>
            <p className={styles.text_non_active}>
                По популярности
            </p>
        </div>
    )
}

export default SortingField
