import CartSvg from '../../assets/icons/footericons/Cart.svg'
import MenuSvg from '../../assets/icons/footericons/Menu.svg'
import GeoSvg from '../../assets/icons/footericons/Geo.svg'
import {Link} from "react-router-dom";
import styles from './footer.module.scss'
function Footer () {
    return (
        <div className={styles.container}>
            <img src={GeoSvg}/>
            <Link to={'/contacts'}>
                <img src={MenuSvg}/>
            </Link>
            <img src={CartSvg}/>
        </div>
    )
}
export default Footer
