import Geo from '../../../assets/icons/headerIcons/Geo.svg'
import Lupa from '../../../assets/icons/headerIcons/Lupa.svg'
import styles from './header_buttons.module.scss'
function SearchButton() {
    return (
        <button className={styles.container}>
            <div className={styles.locate_inside}>
                <img src={Geo}/>
                <p className={styles.text_inside}>
                    Оренбург
                </p>
            </div>
        </button>
    )
}

function GeoButton() {
    return (
        <button className={styles.container}>
            <div className={styles.locate_inside}>
                <img src={Lupa}/>
                <p className={styles.text_inside}>
                    Поиск
                </p>
            </div>
        </button>
    )
}

export {
    GeoButton,
    SearchButton
}
