import styles from './characteristics_block.module.scss'

function CharacteristicsBlock ({name, text}) {
    return (
        <div className={styles.container}>
            <p className={styles.head_text}>
                Характеристики:
            </p>
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
