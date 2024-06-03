import styles from './universal_block.module.scss'
import Arrow from '../../assets/icons/Arrow.svg'

function UniversalBlock ({children, name, isAll}) {
    return (
        <div>
            <div className={styles.text_block}>
                <p className={styles.text}>
                    {name}
                </p>
                {
                    isAll === true && (
                        <div className={styles.all_text}>
                            <p className={styles.all}>
                                Все
                            </p>
                            <img src={Arrow}/>
                        </div>
                    )
                }

            </div>
            <div className={styles.align_items}>
                {children}
            </div>
        </div>
    )
}

export default UniversalBlock
