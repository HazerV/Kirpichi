import ResizeSvg from '../../../assets/icons/Resize.svg'
import styles from './fullscreen_button.module.scss'

function FullScreenButton () {
    return (
        <button className={styles.container}>
            <img src={ResizeSvg}  />
            <p className={styles.text}>
                Карта на весь экран
            </p>
        </button>
    )
}
export default FullScreenButton
