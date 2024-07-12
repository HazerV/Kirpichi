import styles from './header_product.module.scss'
import AddToFavoriteButton from "../../ButtonComponents/AddToFavoriteButton/AddToFavoriteButton.jsx";
import GoBackButton from "../../ButtonComponents/GoBackButtons/GoBackButton/GoBackButton.jsx";
function HeaderProduct ({category_name}) {
    return (
        <div className={styles.container}>
            <div className={styles.back_and_text}>
                <GoBackButton type={'page'} />
                <p className={styles.text}>
                    {category_name}
                </p>
            </div>
            <AddToFavoriteButton />
        </div>
    )
}

export default HeaderProduct
