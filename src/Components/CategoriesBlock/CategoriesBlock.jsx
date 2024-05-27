import styles from './categoies_block.module.scss'
import ForCategories from '../../assets/imgs/ForCategory.png'
function CategoriesBlock () {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.text}>
                    Категории
                </p>
            </div>
            <div className={styles.align_images}>
                <img className={styles.image} src={ForCategories}/>
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
