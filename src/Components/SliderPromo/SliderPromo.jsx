import styles from './slider_promo.module.scss'
import ImageEx from "../../assets/imgs/ImageEx.png";
import ImageBig from '../../assets/imgs/SliderBan.png'
import Carousel from "react-multi-carousel";

const pixelRatio = 1.
function SliderPromo() {
    const responsive = {
        all: {
            breakpoint: { max: 4080, min: 300 },
            items: 1,
        }
    };
    return (
        <div className={styles.promo}>
            <div className={styles.image_block}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    arrows={false}
                    showDots={true}
                >
                    <picture>
                        <source media='(min-width: 1024px)' srcSet={ImageBig}/>
                        <img
                            className={styles.image}
                            src={ImageEx}
                            itemProp='image'
                        />
                    </picture>
                </Carousel>

            </div>
        </div>
    )
}

export default SliderPromo
