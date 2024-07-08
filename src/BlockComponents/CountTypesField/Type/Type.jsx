import styles from './type.module.scss'

function Type ({id, used, price, count}) {
    if (used === true) {
        return (
            <div className={styles.container_in_use}>
                <p className={styles.price}>
                    {price}
                </p>
                <p className={styles.count}>
                    {count}
                </p>
            </div>
        )
    } else {
        return (
            <div className={styles.container_not_in_use}>
                <p className={styles.price}>
                    {price}
                </p>
                <p className={styles.count}>
                    {count}
                </p>
            </div>
        )
    }
}

export default Type
