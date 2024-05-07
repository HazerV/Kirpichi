import ForStories from '../../assets/imgs/ForStories.png'
import styles from './histories_block.module.scss'
function HistoriesBLock () {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.text_block}>
                    Что мы делаем
                </p>
                <stories className={styles.block_stories}>
                    <img src={ForStories} className={styles.image}/>
                    <img src={ForStories} className={styles.image}/>
                    <img src={ForStories} className={styles.image}/>
                    <img src={ForStories} className={styles.image}/>
                </stories>
            </div>
        </div>
    )
}

export default HistoriesBLock
