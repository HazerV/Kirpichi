import styles from './categoies_block.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {getMesh} from "../../services/banners/index.js";
import {useEffect, useState} from "react";
import {Skeleton} from 'primereact/skeleton'

function CategoriesBlock() {

    const navigate = useNavigate();
    const [mesh, setMesh] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getMesh()
            .then((res) => {
                if (res.data.status === 'ok') {
                    setMesh(res.data.banners);
                    setLoading(false)
                }
            })
    }, []);

    const handleCategoryClick = (categorySlug, categoryTitle, categoryId) => {
        navigate(`/categories/${categorySlug}`, {state: {categoryTitle, categoryId}});
    };

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Категории
            </p>
            {
                loading === true ? (
                    <div className={styles.align_images}>
                        <Skeleton className={styles.image} width='182px' height='182px'></Skeleton>
                        <Skeleton className={styles.image} width='182px' height='182px'></Skeleton>
                        <Skeleton className={styles.image} width='182px' height='182px'></Skeleton>
                        <Skeleton className={styles.image} width='182px' height='182px'></Skeleton>
                        <Skeleton className={styles.image} width='182px' height='182px'></Skeleton>
                        <Skeleton className={styles.image} width='182px' height='182px'></Skeleton>
                    </div>
                ) : (
                    <div className={styles.align_images}>
                        {
                            mesh.map((item, index) => {
                                    const categorySlug = item.link.split('/').pop();
                                    const categoryTitle = item.title;
                                    console.log(item)
                                    return (
                                        <Link
                                            key={index}
                                            to={`/categories/${categorySlug}`}
                                            state={{categoryTitle}}
                                            onClick={() => handleCategoryClick(categorySlug, categoryTitle)}
                                        >
                                            <picture>
                                                <source media='(min-width: 1024px)' srcSet={item.image.photo2x}/>
                                                <img className={styles.image} src={item.image.photo} alt={item.title}/>
                                            </picture>
                                        </Link>
                                    );
                                }
                            )
                        }
                    </div>
                )
            }

        </div>
    )
}

export default CategoriesBlock
