import styles from './categoies_block.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { getMesh } from "../../services/banners/index.js";
import { useEffect, useState } from "react";
import {getAllCategories} from "../../services/categories/categories.js";

function CategoriesBlock() {
    const [mesh, setMesh] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getMesh()
            .then((res) => {
                if (res.data.status === 'ok') {
                    setMesh(res.data.banners);
                }
            })
    }, []);

    const handleCategoryClick = (categorySlug, categoryTitle) => {
        navigate(`/categories/${categorySlug}`, { state: { categoryTitle } });
    };

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
                            onClick={() => handleCategoryClick(categorySlug, categoryTitle)}
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
