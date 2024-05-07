import styles from './slider_promo.module.scss'
import ImageEx from "../../assets/imgs/ImageEx.png";

function SliderPromo () {
    return (
        <section className={styles.promo}>
            <div className={styles.image_block}>
                <img className={styles.image} src={ImageEx}/>
            </div>
        </section>
    )
}
export default SliderPromo
