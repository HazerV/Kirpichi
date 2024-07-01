import React from "react";
import AddButton from '../../assets/icons/AddToFavorite.svg'
import AddButtonBlack from '../../assets/icons/AddToFavoriteBlack.svg'
import styles from './add_to_favorite_button.module.scss'

function AddToFavoriteButton() {
    const [state, setState] = React.useState(false)
    if (state === true) {
        return (
            <button className={styles.container} onClick={setState(false)}>
                <img src={AddButtonBlack} alt="heart"/>
            </button>
        )
    } else {
        return (
            <button className={styles.container} onClick={setState(true)}>
                <img src={AddButton} alt="heart"/>
            </button>
        )
    }
}

export default AddToFavoriteButton
