import {Carousel} from 'primereact/carousel';
import ProductEx from '../../assets/imgs/ProductEx.png'
import styles from './product_slider.module.scss'

function ProductSlider({items}) {
    const responsive = {
        desktop: {
            breakpoint: {max: 4000, min: 1024},
            items: 5,
        },
        mobile2: {
            breakpoint: {max: 600, min: 501},
            items: 2.8,
        },
        mobile1: {
            breakpoint: {max: 500, min: 400},
            items: 2.6,
        },
        mobile: {
            breakpoint: {max: 400, min: 0},
            items: 2.4,
        }
    };

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const productTemplate = ({photo2x, photo}) => {
        return (
            <picture>
                <source media='(min-width: 1024px)' srcSet={photo2x}/>
                <img src={photo} alt=""
                     className={styles.sliderImage}
                />
            </picture>
        );
    };
    return (
        <div className={styles.container}>
            <Carousel
                showIndicators={false}
                numVisible={1} numScroll={1}
                className={styles.slider}
                value={items}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
            >

            </Carousel>
        </div>
    )
}

export default ProductSlider
