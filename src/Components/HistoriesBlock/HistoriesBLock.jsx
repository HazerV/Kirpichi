import ForStories from '../../assets/imgs/ForStories.png'
import styles from './histories_block.module.scss'
import Arrow from '../../assets/icons/Arrow.svg'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import {Link} from "react-router-dom";
import ProducersBlock from "../ProducersBlock/ProducersBlock.jsx";
import PaginationButtons from "../../ButtonComponents/PaginationButtons/PaginationButtons.jsx";
function HistoriesBLock ({text, href}) {
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
        <div className={styles.container}>
            <p className={styles.text_block}>
                <h className={styles.text_block}>
                    {text}
                </h>
                <Link style={{textDecoration: 'none'}} to={`${href}`}>
                    <div className={styles.text_all}>
                        <p style={{fontSize: 14}}>
                            Все
                        </p>
                        <img src={Arrow}/>
                    </div>
                </Link>
            </p>
            <Carousel
                className={styles.carousel}
                responsive={responsive}
                infinite={true}
                arrows={false}
            >
                <div>
                    <img src={ForStories} className={styles.image}/>
                </div>
                <div>
                    <img src={ForStories} className={styles.image}/>
                </div>
                <div>
                    <img src={ForStories} className={styles.image}/>
                </div>
            </Carousel>

        </div>
    )
}

export default HistoriesBLock
