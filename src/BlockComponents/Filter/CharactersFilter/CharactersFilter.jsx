import React, { useState } from "react";
import styles from './characters_filter.module.scss';
import StatusIndicator from "./StatusIndicator/StatusIndicator.jsx";
import DownSvg from '../../../assets/icons/Down.svg'
import UpSvg from '../../../assets/icons/Up.svg'

function CharactersFilter({ text, values, selectedValues, onAttributeChange }) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
    }

    function handleValueClick(value) {
        if (selectedValues.includes(value)) {
            onAttributeChange(selectedValues.filter(v => v !== value));
        } else {
            onAttributeChange([...selectedValues, value]);
        }
    }
    if (open) {
        return (
            <div className={styles.options_container}>
                <div className={styles.head_align} onClick={handleClick}>
                    <p className={styles.head_text}>
                        {text}
                    </p>
                    <img src={open ? UpSvg : DownSvg} alt="Arrow"/>
                </div>
                {Object.entries(values).map(([value, count]) => (
                    <div
                        key={value}
                        className={styles.align}
                        onClick={() => handleValueClick(value)}
                    >
                        <StatusIndicator checked={selectedValues.includes(value)}/>
                        <p className={styles.text}>{value}</p>
                        <div>
                            <p>{count}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <div onClick={handleClick} className={styles.head_align}>
                <p className={styles.head_text}>
                    {text}
                </p>
                <img src={open ? UpSvg : DownSvg} alt="Arrow"/>
            </div>

        </div>
    );
}

export default CharactersFilter;
