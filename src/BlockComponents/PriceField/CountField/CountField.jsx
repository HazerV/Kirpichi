import {useState} from "react";
import styles from './count_field.module.scss'
import SendRequest from "../../SendRequest/SendRequest.jsx";
import CartButton from "../../../ButtonComponents/CartButton/CartButton.jsx";
import CountTypesField from "../../CountTypesField/CountTypesField.jsx";
import DownSvg from '../../../assets/icons/DropdownArrow.svg'
import {Dropdown} from 'primereact/dropdown'
function CountField () {

    const [selected, setSelected] = useState('Штук')
    const cities = [
        { name: 'Рублей', code: 'NY' },
        { name: 'Штук', code: 'RM' },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.container_price}>
                <input className={styles.price_field}/>
                <Dropdown value={selected}
                          placeholder={'Штук'}
                          optionLabel="name"
                          onChange={(e) => setSelected(e.value)}
                          options={cities}
                          className={styles.dropdown}
                />
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
