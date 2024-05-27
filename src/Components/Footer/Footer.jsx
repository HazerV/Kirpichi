import CartSvg from '../../assets/icons/footericons/Cart.svg'
import MenuSvg from '../../assets/icons/footericons/Menu.svg'
import GeoSvg from '../../assets/icons/footericons/Geo.svg'
import styles from './footer.module.scss'
function Footer () {
    return (
        <div className={styles.container}>
            <img src={GeoSvg}/>
            <img src={MenuSvg}/>
            <img src={CartSvg}/>
        </div>
    )
}
export default Footer
