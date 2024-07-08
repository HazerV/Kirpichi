import Carousel from "react-multi-carousel";
import ProductEx from '../../assets/imgs/ProductEx.png'


function ProductSlider () {
    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
            partialVisibilityGutter: 20
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2.6,
            partialVisibilityGutter: 30
        }
    };

    return (
        <div>
            <Carousel
                responsive={responsive}
                infinite={true}
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
