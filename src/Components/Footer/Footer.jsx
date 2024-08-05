import CartSvg from '../../assets/icons/footericons/Cart.svg'
import MenuSvg from '../../assets/icons/footericons/Menu.svg'
import GeoSvg from '../../assets/icons/footericons/Geo.svg'
import {Link} from "react-router-dom";
import styles from './footer.module.scss'
function Footer () {
    return (
        <div className={styles.container}>
            <Link className={styles.hover}>
                <img src={GeoSvg}/>
            </Link>
            <Link className={styles.hover} to={'/contacts'}>
                <img src={MenuSvg}/>
            </Link>
            <Link className={styles.hover}>
                <img src={CartSvg}/>
            </Link>
        </div>
    )
}

export default Footer
