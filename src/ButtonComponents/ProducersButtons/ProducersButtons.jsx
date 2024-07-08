import styles from './producers_buttons.module.scss'
import DefaultButton from "../DefaultButton/DefaultButton.jsx";

function ProducersButtons ({text}) {
    return (
        <div className={styles.container}>
            <p className={styles.head_text}>
                {text}
            </p>
            <div className={styles.block}>
                <DefaultButton text={'Клинкер банк'}/>
            </div>
        </div>
    )
}

export default ProducersButtons
