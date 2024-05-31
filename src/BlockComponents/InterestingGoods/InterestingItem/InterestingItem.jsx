import styles from './interesting_item.module.scss'
import ImageEx from '../../../assets/imgs/TopProd.png'
function InterestingItem ({name, price, count}) {
    name = 'Кирпич утолщенный пустотелый лицевой "Красный Глубокий рустик" '
    price = '57 000'
    count = '1 000'
    return (
        <div className={styles.container}>
            <img className={styles.image} src={ImageEx} />
            <div>
                <p className={styles.item_name}>
                    {name}
                </p>
                <p className={styles.price}>
                    {price} руб
                </p>
                <p>
                    {count} штук
                </p>
            </div>
        </div>
    )
}
export default InterestingItem
