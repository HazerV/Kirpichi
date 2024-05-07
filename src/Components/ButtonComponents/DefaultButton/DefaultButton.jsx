import styles from './default_button.module.scss'

function DefaultButton ({text}) {
    return (
        <button className={styles.container}>
            <p className={styles.text_inside}>
                {text}
            </p>
        </button>
    )
}
export default DefaultButton
