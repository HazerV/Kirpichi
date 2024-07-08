import styles from './count_field.module.scss'
import {Dropdown} from "flowbite-react";
import SendRequest from "../../SendRequest/SendRequest.jsx";
import CartButton from "../../../ButtonComponents/CartButton/CartButton.jsx";
import CountTypesField from "../../CountTypesField/CountTypesField.jsx";
import HistoriesBLock from "../../../Components/HistoriesBlock/HistoriesBLock.jsx";

function CountField() {
    return (
        <div className={styles.container}>
            <div className={styles.container_price}>
                <div className={styles.price_field}>
                    <div className={styles.count_inside}>
                        1 000
                    </div>
                </div>
                <Dropdown dismissOnClick={true} label={'TEST'}>
                    <Dropdown.Item> 11 </Dropdown.Item>
                    <Dropdown.Item> 22222 </Dropdown.Item>
                </Dropdown>
                <CartButton/>
                {/*<SendRequest />*/}
            </div>
            <div style={{paddingBottom: 16}}>
                <CountTypesField />
            </div>
            <div style={{paddingBottom: 32}}>
                <SendRequest />
            </div>
        </div>
    )
}

export default CountField
