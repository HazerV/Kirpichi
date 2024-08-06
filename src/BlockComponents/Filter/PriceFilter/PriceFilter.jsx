import { useState, useEffect } from "react";
import styles from './price_filter.module.scss';
import UpSvg from '../../../assets/icons/Up.svg';
import DownSvg from '../../../assets/icons/Down.svg';

function PriceFilter({ minPrice, maxPrice, onPriceChange }) {
    const [open, setOpen] = useState(false);
    const [minPriceInput, setMinPriceInput] = useState(minPrice);
    const [maxPriceInput, setMaxPriceInput] = useState(maxPrice);

    useEffect(() => {
        setMinPriceInput(minPrice);
        setMaxPriceInput(maxPrice);
    }, [minPrice, maxPrice]);

    function handleClick() {
        setOpen(!open);
    }

    function handleMinPriceChange(event) {
        const newMinPrice = parseInt(event.target.value, 10);
        setMinPriceInput(newMinPrice);
        if (newMinPrice !== minPrice) {
            onPriceChange([newMinPrice, maxPriceInput]);
        }
    }

    function handleMaxPriceChange(event) {
        const newMaxPrice = parseInt(event.target.value, 10);
        setMaxPriceInput(newMaxPrice);
        if (newMaxPrice !== maxPrice) {
            onPriceChange([minPriceInput, newMaxPrice]);
        }
    }

    if (!open) {
        return (
            <div onClick={handleClick} className={styles.button_container}>
                <p className={styles.head_text}>
                    Цена
                </p>
                <img src={DownSvg} alt="Arrow Image" />
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <div onClick={handleClick} className={styles.head_text_block}>
                    <p className={styles.head_text}>
                        Цена
                    </p>
                    <img src={UpSvg} />
                </div>
                <div className={styles.input_field}>
                    <p className={styles.text}>
                        Цена от
                    </p>
                    <input
                        className={styles.input}
                        type="number"
                        value={minPriceInput}
                        onChange={handleMinPriceChange}
                    />
                </div>
                <div className={styles.input_field}>
                    <p className={styles.text}>
                        Цена до
                    </p>
                    <input
                        className={styles.input}
                        type="number"
                        value={maxPriceInput}
                        onChange={handleMaxPriceChange}
                    />
                </div>
            </div>
        );
    }
}

export default PriceFilter;
