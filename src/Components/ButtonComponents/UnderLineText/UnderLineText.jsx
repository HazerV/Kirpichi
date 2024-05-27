import styles from './underline_text.module.scss'
function UnderLineText ({text}) {
    return (
        <div>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    )
}
export default UnderLineText
