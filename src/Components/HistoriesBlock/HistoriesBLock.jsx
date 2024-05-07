import ForStories from '../../assets/imgs/ForStories.png'
import styles from './histories_block.module.scss'
import Arrow from '../../assets/icons/Arrow.svg'

function HistoriesBLock() {
    return (
        <div className={styles.container}>
            <p className={styles.text_block}>
                <h className={styles.text_block}>
                    Что мы делаем
                </h>
                <div className={styles.text_all}>
                    <p>
                        Все
                    </p>
                    <img src={Arrow}/>
                </div>
            </p>
            <stories className={styles.block_stories}>
                <img src={ForStories} className={styles.image}/>
                <img src={ForStories} className={styles.image}/>
                <img src={ForStories} className={styles.image}/>
                <img src={ForStories} className={styles.image}/>
                <img src={ForStories} className={styles.image}/>
                <img src={ForStories} className={styles.image}/>
                <img src={ForStories} className={styles.image}/>
                <img src={ForStories} className={styles.image}/>
                <img src={ForStories} className={styles.image}/>
            </stories>
        </div>
    )
}

export default HistoriesBLock
