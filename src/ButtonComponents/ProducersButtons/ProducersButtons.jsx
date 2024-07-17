import styles from './producers_buttons.module.scss'
import DefaultButton from "../DefaultButton/DefaultButton.jsx";

function ProducersButtons ({text, name, route}) {
    return (
        <div className={styles.container}>
            <p className={styles.head_text}>
                Производитель
            </p>
            <div className={styles.block}>
                <DefaultButton href={route} text={name}/>
            </div>
        </div>
    )
}

export default ProducersButtons
