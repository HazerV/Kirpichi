import ForStories from '../../assets/imgs/ForStories.png'
import styles from './histories_block.module.scss'
import Arrow from '../../assets/icons/Arrow.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import {Navigation, Pagination, Scrollbar} from "swiper/modules";


function HistoriesBLock() {
    return (
        <div className={styles.container}>
            <p className={styles.text_block}>
                <h className={styles.text_block}>
                    Что мы делаем
                </h>
                <div className={styles.text_all}>
                    <p>
                        Все
                    </p>
                    <img src={Arrow}/>
                </div>
            </p>
            <div className={styles.block_stories}>
                {/*<img src={ForStories} className={styles.image}/>*/}
                <img src={ForStories} className={styles.image}/>
                <img src={ForStories} className={styles.image}/>
            </div>
        </div>
    )
}

export default HistoriesBLock
