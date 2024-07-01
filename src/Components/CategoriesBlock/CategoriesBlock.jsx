import styles from './categoies_block.module.scss'
import ForCategories from '../../assets/imgs/ForCategory.png'
import {Link} from "react-router-dom";

function CategoriesBlock ({text}) {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.text}>
                    Категории
                </p>
            </div>
            <div className={styles.align_images}>
                <Link to={'/category'}>
                    <img className={styles.image} src={ForCategories}/>
                </Link>
                <img className={styles.image} src={ForCategories}/>
                <img className={styles.image} src={ForCategories}/>
                <img className={styles.image} src={ForCategories}/>
                <img className={styles.image} src={ForCategories}/>
                <img className={styles.image} src={ForCategories}/>
            </div>
        </div>
    )
}

export default CategoriesBlock
