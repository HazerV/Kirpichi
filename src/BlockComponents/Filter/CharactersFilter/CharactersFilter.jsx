import React, {useState, useEffect} from "react";
import styles from './characters_filter.module.scss';
import StatusIndicator from "./StatusIndicator/StatusIndicator.jsx";
import DownSvg from '../../../assets/icons/Down.svg';
import UpSvg from '../../../assets/icons/Up.svg';

function CharactersFilter({text, values, selectedValues, onAttributeChange}) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleValueClick = (value) => {
        if (selectedValues.includes(value)) {
            onAttributeChange(selectedValues.filter(v => v !== value));
        } else {
            onAttributeChange([...selectedValues, value]);
        }
    };

    return (
        <div className={styles.container}>
            <div onClick={handleClick} className={styles.head_align}>
                <p className={styles.head_text}>
                    {text}
                </p>
                <img src={open ? UpSvg : DownSvg} alt="Arrow"/>
            </div>
            {open && (
                <div className={styles.options_container}>
                    <div className={styles.scroller}>
                        {
                            Object.entries(values).map(([value, count]) => (
                                <div
                                    key={value}
                                    className={styles.align}
                                    onClick={() => handleValueClick(value)}
                                >
                                    <StatusIndicator checked={selectedValues.includes(value)}/>
                                    <p className={styles.text}>
                                        {value}
                                    </p>
                                    <div className={styles.count_field}>
                                        <p>
                                            {count}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default CharactersFilter;
