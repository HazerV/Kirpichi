import AddButton from '../../../assets/icons/AddToFavorite.svg'
import styles from './add_to_favorite_button.module.scss'
function AddToFavoriteButton () {
    return (
        <div className={styles.container}>
            <img src={AddButton} />
        </div>
    )
}

export default AddToFavoriteButton
