import styles from './item_component.module.scss'
import { Skeleton } from 'primereact/skeleton'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ItemComponents({name, image, photo2x, description, surface, size, color, price, href}) {
    //
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);


    return (
        <div className={styles.container}>
            <Link style={{textDecoration: "none"}} to={href}>
                <picture>
                    <source media='(min-width: 1024px)' srcSet={photo2x}/>
                    <img className={styles.image} src={image} alt="Product Photo"/>
                </picture>
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
