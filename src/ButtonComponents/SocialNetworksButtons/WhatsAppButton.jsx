import styles from './social_network_buttons.module.scss'
import WhatsAppSvg from '../../../assets/icons/WhatsApp.svg'
function WhatsAppButton () {
    return (
        <div className={styles.container_whats}>
            <img src={WhatsAppSvg} />
        </div>
    )
}
export default WhatsAppButton
