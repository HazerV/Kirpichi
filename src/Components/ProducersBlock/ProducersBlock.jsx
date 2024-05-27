import styles from './producers_block.module.scss'
import ForProducers from '../../assets/imgs/ForProducers.png'
import Arrow from '../../assets/icons/Arrow.svg'
function ProducersBlock () {
    return (
        <div className={styles.container}>
            <p className={styles.text_block}>
                <h1 className={styles.text_block}>
                    Производители
                </h1>
                <div className={styles.text_all}>
                    {/*<p>*/}
                    {/*    Все*/}
                    {/*</p>*/}
                    {/*<img src={Arrow}/>*/}
                </div>
            </p>
            <p className={styles.block_scroll}>
                <img src={ForProducers}/>
            </p>

        </div>
    )
}

export default ProducersBlock
