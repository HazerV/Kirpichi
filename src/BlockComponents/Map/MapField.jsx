import styles from './map_field.module.scss'
function MapField () {
    return (
        <div>
            <p className={styles.head_text}>
                Адрес:
            </p>
            <p className={styles.under_text}>
                Оренбург, Беляевское шоссе, 16
            </p>
        </div>
    )
}
export default MapField
