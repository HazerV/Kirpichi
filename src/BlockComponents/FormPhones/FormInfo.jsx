import GoBackButton from "../../Components/ButtonComponents/GoBackButton/GoBackButton.jsx";
import styles from './formphones.module.scss'

function FormInfo ({head_text, text_one, text_two, text_three}) {

    return (
        <div className={styles.container}>
            {
                head_text && (
                    <p className={styles.head_text}>
                        {head_text}
                    </p>
                )
            }
            {
                text_one && (
                    <p>
                        {text_one}
                    </p>
                )
            }
            {
                text_two && (
                    <p>
                        {text_two}
                    </p>
                )
            }
            {
                text_three && (
                    <h1 className={styles.text_three}>
                        {text_three}
                    </h1>
                )
            }

        </div>
    )
}

export default FormInfo
