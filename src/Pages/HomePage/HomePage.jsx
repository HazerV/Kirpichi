import styles from './home_page.module.scss'
import Header from "../../Components/Header/Header.jsx";
import {Carousel} from "react-responsive-carousel";
import ImageEx from '../../assets/imgs/ImageEx.png'
function HomePage() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <section className={styles.promo}>
                    <div className={styles.image_block}>
                        <img className={styles.image} src={ImageEx}/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage
