import styles from './price_field.module.scss'
import CountField from "./CountField/CountField.jsx";
function PriceField () {
    return (
        <div className={styles.container}>
            <p className={styles.price}>
                Стоимость:
            </p>
            <CountField />
        </div>
    )
}

export default PriceField
