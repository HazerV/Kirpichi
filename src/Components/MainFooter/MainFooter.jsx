// import DefaultButton from "../ButtonComponents/DefaultButton/DefaultButton.jsx";
import DefaultButton from "../../ButtonComponents/DefaultButton/DefaultButton.jsx";
import UnderLineText from "../../ButtonComponents/UnderLineText/UnderLineText.jsx";
// import UnderLineText from "../ButtonComponents/UnderLineText/UnderLineText.jsx";
import styles from './main_footer.module.scss'
import Footer from "../Footer/Footer.jsx";
function MainFooter () {
    return (
        <div className={styles.container}>
            <div className={styles.buttons_top}>
                <DefaultButton text={'Оплата'} />
                <DefaultButton text={'Доставка'} />
                <DefaultButton text={'О нас'} />
            </div>
            <div className={styles.buttons_underline}>
                <UnderLineText text={'Контакты'} href={'/contacts'} />
                <UnderLineText text={'Оферта'} />
                <UnderLineText text={'Пользовательское соглашение'} />
                <UnderLineText text={'Политика конфиденциальности'} />
            </div>
            <p className={styles.text_license}>
                © 2023 – 2024. «КирпичМаркет». Все права защищены.
            </p>
            <Footer/>
        </div>
    )
}
export default MainFooter
