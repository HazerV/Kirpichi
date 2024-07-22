import React from "react";
import styles from './sorting_field.module.scss'

function SortingField({ onSortChange, sort_by }) {
    const handleSortChange = (newSortBy) => {
        onSortChange(newSortBy);
    };

    return (
        <div className={styles.container}>
            <p
                onClick={() => handleSortChange('popular_asc')}
                className={sort_by === 'popular_asc' ? styles.text_active : styles.text_non_active}
            >
                По популярности
            </p>
            <p
                onClick={() => handleSortChange('price_desc')}
                className={sort_by === 'price_desc' ? styles.text_active : styles.text_non_active}
            >
                Сначала дороже
            </p>
            <p
                onClick={() => handleSortChange('price_asc')}
                className={sort_by === 'price_asc' ? styles.text_active : styles.text_non_active}
            >
                Сначала дешевле
            </p>
        </div>
    );
}

export default SortingField;
