import Carousel from "react-multi-carousel";
import ProductEx from '../../assets/imgs/ProductEx.png'


function ProductSlider () {
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
        <div>
            <Carousel
                responsive={responsive}
                // infinite={true}
                arrows={false}
            >
                <div>
                    <img src={ProductEx} alt=""/>
                </div>
                <div>
                    <img src={ProductEx} alt=""/>
                </div>
                <div>
                    <img src={ProductEx} alt=""/>
                </div>
                <div>
                    <img src={ProductEx} alt=""/>
                </div>
                <div>
                    <img src={ProductEx} alt=""/>
                </div>
            </Carousel>
        </div>
    )
}

export default ProductSlider
