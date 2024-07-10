import styles from './personal_data.module.scss'

function PersonalData () {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Нажимая на кнопку «Отправить заявку» Вы принимаете условия Согласия на обработку персональных данных.
            </p>
        </div>
    )
}

export default PersonalData
