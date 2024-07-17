import styles from './categoies_block.module.scss'
import { Link } from "react-router-dom";
import { getMesh } from "../../services/banners/index.js";
import { useEffect, useState } from "react";
import { getProductsByCategoryId } from "../../services/products/products.js";

function CategoriesBlock () {
    const [mesh, setMesh] = useState([]);

    useEffect(() => {
        getMesh()
            .then((res) => {
                if (res.data.status === 'ok') {
                    setMesh(res.data.banners);
                    console.log(mesh.map((i) => i));
                }
            })
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Категории
            </p>
            <div className={styles.align_images}>
                {mesh.map((item, index) => {
                    const categorySlug = item.link.split('/').pop();
                    const categoryTitle = item.title;
                    return (
                        <Link
                            key={index}
                            to={`/categories/${categorySlug}`}
                            state={{ categoryTitle }}
                            onClick={() => getProductsByCategoryId(categorySlug)}
                        >
                            <picture>
                                <source media='(min-width: 1024px)' srcSet={item.image.photo2x} />
                                <img className={styles.image} src={item.image.photo} alt={item.title} />
                            </picture>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default CategoriesBlock
