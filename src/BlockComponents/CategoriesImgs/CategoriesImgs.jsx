import ForCategories from '../../assets/imgs/ForCategory.png'
import styles from './categories_imgs.module.scss'

function CategoriesImgs () {
    return (
        <div>
            <img src={ForCategories} className={styles.image} />
        </div>
    )
}
export default CategoriesImgs
