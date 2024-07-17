import Carousel from "react-multi-carousel";
import ProductEx from '../../assets/imgs/ProductEx.png'
import styles from './product_slider.module.scss'

function ProductSlider ({photo, photo2x}) {
    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
        },
        mobile2: {
            breakpoint: { max: 600, min: 501 },
            items: 2.8,
        },
        mobile1: {
            breakpoint: { max: 500, min: 400 },
            items: 2.6,
        },
        mobile: {
            breakpoint: { max: 400, min: 0 },
            items: 2.4,
        }
    };

    return (
        <div className={styles.container}>
            <Carousel
                responsive={responsive}
                // infinite={true}
                arrows={false}
            >
                <picture>
                    <source media='(min-width: 1024px)' srcSet={photo2x}/>
                    <img src={photo} alt=""/>
                </picture>
            </Carousel>
        </div>
    )
}

export default ProductSlider
