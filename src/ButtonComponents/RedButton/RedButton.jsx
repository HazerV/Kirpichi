import styles from './red_button.module.scss'

function RedButton ({text}) {
    return (
        <div className={styles.container}>
            <p className={styles.text_inside}>
                {text}
            </p>
        </div>
    )
}

export default RedButton
