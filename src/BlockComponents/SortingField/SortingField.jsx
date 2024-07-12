import React from "react";
import styles from './sorting_field.module.scss'

function SortingField () {

    const [isActive, setIsActive] = React.useState(false)
    function handleCLick () {
        if (isActive === true) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }


    return (
        <div className={styles.container}>
            {
                isActive === false ? (
                    <p onClick={handleCLick} className={styles.text_non_active}>
                        По популярности
                    </p>
                ) : (
                    <p onClick={handleCLick} className={styles.text_active}>
                        По популярности
                    </p>
                )
            }
        </div>
    )
}

export default SortingField
