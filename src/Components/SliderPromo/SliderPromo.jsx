import styles from './slider_promo.module.scss'
import ImageEx from "../../assets/imgs/ImageEx.png";
import {Swiper} from "swiper";
import 'swiper/css'

const images = [
    { image: ImageEx }, 
    { image: ImageEx },
    { image: ImageEx }
];

function SliderPromo () {
    return (
        <div className={styles.promo}>
            <div className={styles.image_block}>
                <img className={styles.image} src={ImageEx}/>
            </div>
        </div>
    )
}
export default SliderPromo
