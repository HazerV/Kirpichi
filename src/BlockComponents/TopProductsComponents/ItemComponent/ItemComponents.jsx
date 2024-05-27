import styles from './item_component.module.scss'
import TopProd from '../../../assets/imgs/TopProd.png'
function ItemComponents ({name, description, surface, size, color, price}) {
    name = 'Кирпич утолщенный пустотелый лицевой "Красный Глубокий Рустик"'
    description = 'Марка прочности: М150-170-200'
    surface = 'Рустик'
    size = '250*120*88'
    color = 'Красный'
    price = '49. 90'
    return (
        <div className={styles.container}>
            <img src={TopProd} />
            <p className={styles.name}>
                {name}
            </p>
            <div>
                <p className={styles.description}>
                    {description}
                </p>
                <p>
                    Поверхность: {surface}
                </p>
                <p>
                    Размер: {size}
                </p>
                <p>
                    Цвет: {color}
                </p>
            </div>
            <p className={styles.price}>
                Цена: {price} ₽
            </p>
        </div>
    )
}
export default ItemComponents
