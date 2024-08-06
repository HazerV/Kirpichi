import styles from './item_component.module.scss'
import { Skeleton } from 'primereact/skeleton'
import { Link } from "react-router-dom";
function ItemComponents({name, photo, photo2x, description, surface, size, color, price, href}) {
    const noImageURL = 'https://api.polflacona.ru/image/no_image.jpg'
    return (
        <div className={styles.container}>
            <Link style={{textDecoration: "none"}} to={href}>
                {
                    photo === noImageURL ? (
                        <Skeleton className={styles.image_skeleton} width='180px' height='180px' />
                    ) : (
                        <picture>
                            <source media='(min-width: 1024px)' srcSet={photo2x}/>
                            <img className={styles.image} src={photo} alt="Product Photo"/>
                        </picture>
                    )
                }
                <p className={styles.name}>{name}</p>
                <div>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.color}>Поверхность: {surface}</p>
                    <p className={styles.size}>Размер: {size}</p>
                    <p className={styles.color}>Цвет: {color}</p>
                </div>
                <p className={styles.price}>{price} ₽</p>
            </Link>
        </div>
    );
}

export default ItemComponents;
