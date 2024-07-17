import styles from './characteristics_block.module.scss'

function CharacteristicsBlock ({name, text, key}) {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <p className={styles.text_inside}>
                    {name}
                </p>
                <div className={styles.border} />
                <p>
                    {text}
                </p>
            </div>

        </div>
    )
}

export default CharacteristicsBlock
