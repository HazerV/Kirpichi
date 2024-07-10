import styles from './interesting_goods.module.scss'
import InterestingItem from "./InterestingItem/InterestingItem.jsx";
import ContactsField from "../ContactsField/ContactsField.jsx";
import SendRequest from "../SendRequest/SendRequest.jsx";
function InterestingGoods () {
    return (
        <div className={styles.container}>
            <p className={styles.text_head}>
                Интересующие товары:
            </p>
            <div className={styles.gap}>
                <InterestingItem />
                <InterestingItem />
            </div>
            <div className={styles.pad_bot}>
                <ContactsField />
            </div>
            <SendRequest />
        </div>
    )
}
export default InterestingGoods
