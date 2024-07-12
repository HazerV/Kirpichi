import React from "react";
import AddButton from '../../assets/icons/AddToFavorite.svg'
import AddButtonBlack from '../../assets/icons/AddToFavoriteBlack.svg'
import styles from './add_to_favorite_button.module.scss'

function AddToFavoriteButton () {
    const [state, setState] = React.useState(false)
    function handleState () {
        if (state === true) {
            setState(false)
        } else {
            setState(true)
        }
    }
    if (state === true) {
        return (
            <div className={styles.container_non_active} onClick={handleState}>
                <img src={AddButtonBlack} alt="heart"/>
            </div>
        )
    } else {
        return (
            <div className={styles.container_active} onClick={handleState}>
                <img src={AddButton} alt="heart"/>
            </div>
        )
    }
}

export default AddToFavoriteButton
