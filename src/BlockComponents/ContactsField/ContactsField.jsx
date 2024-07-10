import styles from './contacts_field.module.scss'
function ContactsField () {
    return (
        <div className={styles.container}>
            <p className={styles.head_text}>
                Контактные данные
            </p>
            <div>
                <p>
                    Номер телефона *
                </p>
                <input className={styles.input} />
            </div>
            <div>
                <p>
                    Имя
                </p>
                <input className={styles.input} />
            </div>
            <div>
                <p>
                    Адрес доставки
                </p>
                <input className={styles.input} />
            </div>
        </div>
    )
}

export default ContactsField
