import {useState} from "react";
import SendRequest from "../../SendRequest/SendRequest.jsx";
import CartButton from "../../../ButtonComponents/CartButton/CartButton.jsx";
import CountTypesField from "../../CountTypesField/CountTypesField.jsx";
import HistoriesBLock from "../../../Components/HistoriesBlock/HistoriesBLock.jsx";
import DownSvg from '../../../assets/icons/DropdownArrow.svg'
import styles from './count_field.module.scss'

function CountField () {

    const [type, setType] = useState('штук')
    const [open, setOpen] = useState(false)
    function handleDropdown () {
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_price}>
                <input className={styles.price_field} />
                {
                    open === false ? (
                        <div onClick={handleDropdown} className={styles.dropdown}>
                            <p className={styles.text_dropdown}>
                                {type}
                            </p>
                            <img className={styles.arrow} src={DownSvg} alt=""/>
                        </div>
                    ) : (
                        <div className={styles.opened_dropdown}>
                            <div className={styles.drop_cont} onClick={() => {
                                setType('штук')
                                setOpen(false)
                            }}>
                                <p className={styles.text_dropdown}>
                                    штук
                                </p>
                            </div>
                            <div className={styles.drop_cont} onClick={() => {
                                setType('рублей')
                                setOpen(false)
                            }}>
                                <p className={styles.text_dropdown}>
                                    рублей
                                </p>
                            </div>
                        </div>
                    )
                }

                <CartButton/>
            </div>
            <div className={styles.pad16}>
                <CountTypesField/>
            </div>
            <div className={styles.pad32}>
                <SendRequest/>
            </div>
        </div>
    )
}

export default CountField
