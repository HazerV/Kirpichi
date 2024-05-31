import styles from './social_network_buttons.module.scss'
import TelegramSvg from '../../../assets/icons/Telegram.svg'
function TelegramButton () {
    return (
        <div className={styles.container_telegram}>
            <img src={TelegramSvg} />
        </div>
    )
}
export default TelegramButton
