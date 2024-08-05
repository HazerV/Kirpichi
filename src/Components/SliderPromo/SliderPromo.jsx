import styles from './slider_promo.module.scss'
import ImageEx from "../../assets/imgs/ImageEx.png";
import ImageBig from '../../assets/imgs/SliderBan.png'
import Carousel from "react-multi-carousel";
import {useEffect, useState} from "react";
import {getBanners} from "../../services/banners/index.js";
import {Skeleton} from 'primereact/skeleton'

function SliderPromo() {

    const [bannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getBanners().then((res) => {
            let data = res.data.banners;
            setBannerData(data);
            setLoading(false)
        });
    }, []);

    const responsive = {
        all: {
            breakpoint: {max: 4080, min: 300},
            items: 1,
        }
    };
    if (loading) {
        return (
            <div className={styles.carouselWrapper}>
                <Skeleton className={styles.skeleton} width='960px' height='400px' />
            </div>
        )
    }
    return (
        <div className={styles.promo}>
            <div className={styles.image_block}>
                <div className={styles.carouselWrapper}>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        // arrows={false}
                        showDots={true}
                    >
                        {bannerData.map((banner, index) => (
                            <div key={index}>
                                <picture>
                                    <source media='(min-width: 1024px)' srcSet={banner.image.photo2x}/>
                                    <img
                                        className={styles.image}
                                        src={banner.image.photo}
                                        itemProp='image'
                                        alt={banner.title}
                                    />
                                </picture>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default SliderPromo
