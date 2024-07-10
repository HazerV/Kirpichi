import styles from './price_filter.module.scss'
import UpSvg from '../../../assets/icons/Up.svg'
import DownSvg from '../../../assets/icons/Down.svg'
import React from "react";
function PriceFilter () {

    const [open, setOpen] = React.useState(false)
    function handleClick () {
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    if (open === false) {
        return (
            <div onClick={handleClick} className={styles.button_container}>
                <p className={styles.head_text}>
                    Цена
                </p>
                <img src={DownSvg} alt="Arrow Image"/>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <div onClick={handleClick} className={styles.head_text_block}>
                    <p className={styles.head_text}>
                        Цена
                    </p>
                    <img src={UpSvg}/>
                </div>
                <div>
                    <p className={styles.text}>
                        Цена от
                    </p>
                    <input className={styles.input} type="text"/>
                </div>
                <div>
                    <p className={styles.text}>
                        Цена до
                    </p>
                    <input className={styles.input} type="text"/>
                </div>
            </div>
        )
    }
}

export default PriceFilter
