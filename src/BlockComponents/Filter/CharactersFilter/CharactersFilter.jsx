
import React from "react";
import styles from './characters_filter.module.scss';
import StatusIndicator from "./StatusIndicator/StatusIndicator.jsx";
import UpSvg from '../../../assets/icons/Up.svg';
import DownSvg from '../../../assets/icons/Down.svg';
import {useFilterSave} from "../../../Context/FilterSave.jsx";

function CharactersFilter({ text, values, selectedValue }) {
    const [open, setOpen] = React.useState(false);
    const { toggleAttribute } = useFilterSave();

    function handleClick() {
        setOpen(!open);
    }

    function handleAttributeChange(value) {
        toggleAttribute(text, value);
    }

    return (
        <div className={styles.container}>
            <div onClick={handleClick} className={styles.head_align}>
                <p className={styles.head_text}>{text}</p>
                <img src={open ? UpSvg : DownSvg} alt="Arrow" />
            </div>
            {
                open && (
                    <div className={styles.options}>
                        {
                            Object.entries(values).map(([value, count]) => (
                                <div key={value} className={styles.align} onClick={() => handleAttributeChange(value)}>
                                    <StatusIndicator
                                        checked={selectedValue === value}
                                        onChange={() => handleAttributeChange(value)}
                                    />
                                    <p className={styles.text}>{value}</p>
                                    <div>
                                        <p>{count}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default CharactersFilter;
