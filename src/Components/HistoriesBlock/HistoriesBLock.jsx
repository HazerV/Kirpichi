import ForStories from '../../assets/imgs/ForStories.png'
import styles from './histories_block.module.scss'
import Arrow from '../../assets/icons/Arrow.svg'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import {Link} from "react-router-dom";
import ProducersBlock from "../ProducersBlock/ProducersBlock.jsx";
import PaginationButtons from "../../ButtonComponents/PaginationButtons/PaginationButtons.jsx";

function HistoriesBLock({text, href}) {

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 721},
            items: 4,
        },
        tablet_next: {
            breakpoint: {max: 720, min: 550},
            items: 4,
        },
        tablet: {
            breakpoint: {max: 549, min: 412},
            items: 2.8,
        },
        mobile: {
            breakpoint: {max: 411, min: 370},
            items: 2.65
        },
        mobile_firs: {
            breakpoint: {max: 369, min: 290},
            items: 2.3
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
                responsive={responsive}
                infinite={true}
                arrows={false}
            >
                <Link to={'/histories'}>
                    <div className={styles.slider}>
                        <img src={ForStories} className={styles.image}/>
                    </div>
                </Link>

                <div className={styles.slider}>
                    <img src={ForStories} className={styles.image}/>
                </div>
                <div className={styles.slider}>
                    <img src={ForStories} className={styles.image}/>
                </div>
                <div className={styles.slider}>
                    <img src={ForStories} className={styles.image}/>
                </div>
            </Carousel>
        </div>
    )
}

export default HistoriesBLock
