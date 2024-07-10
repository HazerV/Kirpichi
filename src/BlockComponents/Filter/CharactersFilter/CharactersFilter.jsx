import React from "react";
import styles from './characters_filter.module.scss'
import StatusIndicator from "./StatusIndicator/StatusIndicator.jsx";
import UpSvg from '../../../assets/icons/Up.svg'
import DownSvg from '../../../assets/icons/Down.svg'
function CharactersFilter ({head, text, count}) {

    text = 'Параметры'

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
                    {text}
                </p>
                <img src={DownSvg} alt="Arrow Image"/>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <div onClick={handleClick} className={styles.head_align}>
                    <p className={styles.head_text}>
                        {text}
                    </p>
                    <img src={UpSvg} alt="Arrow"/>
                </div>
                <div className={styles.align}>
                    <StatusIndicator/>
                    <p className={styles.text}>
                        {text}
                    </p>
                    <div>
                        <p>
                            {count}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharactersFilter
