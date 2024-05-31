import styles from './interesting_goods.module.scss'
import InterestingItem from "./InterestingItem/InterestingItem.jsx";
function InterestingGoods () {
    return (
        <div className={styles.container}>
            <p className={styles.text_head}>
                Интересующие товары:
            </p>
            <InterestingItem />
        </div>
    )
}
export default InterestingGoods
