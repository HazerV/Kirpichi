import GoBackButton from "../../Components/ButtonComponents/GoBackButton/GoBackButton.jsx";
import styles from './formphones.module.scss'

function FormInfo ({head_text, text_one, text_two, text_three}) {
    head_text = 'Телефоны'
    text_one = '+7 3532 97-67-67'
    text_two = '+7 3532 97-67-67'
    text_three = '+7 987 847-67-67'
    return (
        <div className={styles.container}>
            <p className={styles.head_text}>
                {head_text}
            </p>
            <p>
                {text_one}
            </p>
            <p>
                {text_two}
            </p>
            <p className={styles.text_three}>
                {text_three}
            </p>
        </div>
    )
}
export default FormInfo
