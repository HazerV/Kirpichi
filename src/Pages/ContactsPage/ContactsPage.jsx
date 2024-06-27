import HeaderPage from "../../Components/HeaderPage/HeaderPage.jsx";
import {GeoButton} from "../../ButtonComponents/HeaderButtons/HeaderButttons.jsx";
import FormInfo from "../../BlockComponents/FormPhones/FormInfo.jsx";
import styles from './contacts_page.module.scss'
import WhatsAppButton from "../../ButtonComponents/SocialNetworksButtons/WhatsAppButton.jsx";
import TelegramButton from "../../ButtonComponents/SocialNetworksButtons/TelegramButton.jsx";
import MapField from "../../BlockComponents/Map/MapField.jsx";
import {Form} from "react-router-dom";
import Footer from "../../Components/Footer/Footer.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
import {Link} from "react-router-dom";

function ContactsPage() {
    return (
        <div className={styles.container}>
            <HeaderPage text={'Контактная информация'}/>
            <div style={{paddingBottom: 12}}>
                <GeoButton/>
            </div>
            <div className={styles.forms}>
                <FormInfo head_text={'Телефоны: '} text_one={'+7 3532 97-67-67'} text_two={'+7 3532 97-67-67'}
                          text_three={'+7 3532 97-67-67'}/>
                <FormInfo head_text={'График работы: '} text_one={'Пн-пт - с 09:00 до 18:00'}
                          text_two={'Сб - см 10:00 до 15:00'} text_three={'Вс - по договоренности'}/>
                <FormInfo head_text={'Другое: '} text_one={'Telegram: @Kirpich_market56'}
                          text_two={'Email: kirpich_market@mail.ru'}/>
                <div className={styles.network_buttons}>
                    <Link to={'https://wa.me/+79878476767'}>
                        <WhatsAppButton/>
                    </Link>
                    <Link to={'https://t.me/Kirpich_market56'}>
                        <TelegramButton/>
                    </Link>
                </div>
            </div>
            <div style={{paddingBottom: 33}}>
                <MapField/>
            </div>
            <MainFooter/>
        </div>
    )
}

export default ContactsPage

