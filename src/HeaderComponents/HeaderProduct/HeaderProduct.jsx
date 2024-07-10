import styles from "../HeaderPage/header_page.module.scss";
import GoBackButton from "../../ButtonComponents/GoBackButtons/GoBackButton/GoBackButton.jsx";
import SearchHeader from "../../ButtonComponents/SearchHeader/SearchHeader.jsx";
import AddToFavoriteButton from "../../ButtonComponents/AddToFavoriteButton/AddToFavoriteButton.jsx";
function HeaderProduct ({text, search}) {
    return (
        <div className={styles.container}>
            <GoBackButton type={'page'}/>
            <p className={styles.text}>
                {text}
            </p>
            <AddToFavoriteButton />
        </div>
    )
}

export default HeaderProduct
