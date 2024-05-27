import ItemComponents from "../../BlockComponents/TopProductsComponents/ItemComponent/ItemComponents.jsx";
import styles from './sell_leaders.module.scss'
import Arrow from '../../assets/icons/Arrow.svg'
function SellLeaders() {
    return (
        <div>
            <div className={styles.text_block}>
                <p className={styles.text}>
                    Лидер продаж
                </p>
                <div className={styles.all_text}>
                    <p className={styles.all}>
                        Все
                    </p>
                    <img src={Arrow}/>
                </div>
            </div>
            <div className={styles.align_items}>
                <ItemComponents name={'Кирпич утолщенный пустотелый лицевой "Красный Глубокий Рустик" '}
                                description={'Марка прочности: М150-170-200'} size={'250*120*88'} color={'Красный'}
                                price={'46.60'} surface={'Рустик'}/>
                <ItemComponents/>
                <ItemComponents/>
                <ItemComponents/>
                <ItemComponents/>
                <ItemComponents/>
            </div>
        </div>
    )
}

export default SellLeaders
