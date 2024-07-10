import styles from './header.module.scss'
import {GeoButton, SearchButton} from "../../ButtonComponents/HeaderButtons/HeaderButttons.jsx";
import Logo from "../../assets/imgs/Logo.svg";
import DefaultButton from "../../ButtonComponents/DefaultButton/DefaultButton.jsx";
function Header() {
    return (
        <header className={styles.container}>
            <search className={styles.buttons_block}>
                <div className={styles.header_buttons}>
                    <GeoButton/>
                    <SearchButton/>
                </div>
            </search>
            <img className={styles.logo} src={Logo}/>
            <div className={styles.underlogo_block}>
                <p className={styles.underlogo_text}>
                    Будние с 9:00 до 18:00
                </p>
                <p className={styles.underlogo_text}>
                    Суббота с 10:00 до 15:00
                </p>
            </div>
            <div className={styles.undertext_buttons}>
                <DefaultButton text={'Контакты'} href={'/contacts'}/>
                <DefaultButton text={'Доставка'} href={'/delivery'}/>
                <DefaultButton text={'О компании'} href={'/info'}/>
            </div>
        </header>
    )
}

export default Header
