import WhatsAppSvg from '../../assets/icons/WhatsApp.svg'
import styles from './social_network_buttons.module.scss'
function WhatsAppButton () {
    return (
        <div className={styles.container_whats}>
            <img src={WhatsAppSvg} />
        </div>
    )
}
export default WhatsAppButton
