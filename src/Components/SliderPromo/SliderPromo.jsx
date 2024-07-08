import styles from './slider_promo.module.scss'
import ImageEx from "../../assets/imgs/ImageEx.png";
import ImageBig from '../../assets/imgs/SliderBan.png'
import Carousel from "react-multi-carousel";

const pixelRatio = 1.2
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
                    arrows={false}
                    showDots={true}
                >
                    <picture>
                        <source media={`(-webkit-min-device-pixel-ratio: ${pixelRatio})`} srcSet={ImageBig}/>
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
