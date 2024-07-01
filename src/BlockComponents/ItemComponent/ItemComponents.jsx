import styles from './item_component.module.scss'
import TopProd from '../../assets/imgs/TopProd.png'
import {Link} from "react-router-dom";

function ItemComponents({name, description, surface, size, color, price, href}) {

    return (
        <div className={styles.container}>
            <Link style={{textDecoration: "none"}} to={href}>
                <img src={TopProd}/>
                <p className={styles.name}>
                    {name}
                </p>
                <div>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <p className={styles.color}>
                        Поверхность: {surface}
                    </p>
                    <p className={styles.color}>
                        Размер: {size}
                    </p>
                    <p className={styles.color}>
                        Цвет: {color}
                    </p>
                </div>
                <p className={styles.price}>
                    Цена: {price} ₽
                </p>
            </Link>
        </div>
    )
}

export default ItemComponents
