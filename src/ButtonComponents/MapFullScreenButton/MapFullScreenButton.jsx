import styles from './map_fullscreen_button.module.scss'
import ResizeIcon from '../../assets/icons/Resize.svg'
function MapFullScreenButton () {
    return (
        <div className={styles.container}>
            <img src={ResizeIcon} />
            <p>
                Карта на весь экран
            </p>
        </div>
    )
}
export default MapFullScreenButton
