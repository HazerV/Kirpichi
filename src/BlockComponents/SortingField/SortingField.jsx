import React from "react";
import styles from './sorting_field.module.scss'

function SortingField({ onSortChange, sortBy }) {
    const handleSortChange = (newSortBy) => {
        onSortChange(newSortBy);
    };

    return (
        <div className={styles.container}>
            <p
                onClick={() => handleSortChange('popularity_desc')}
                className={sortBy === 'popularity_desc' ? styles.text_active : styles.text_non_active}
            >
                По популярности
            </p>
            <p
                onClick={() => handleSortChange('price_desc')}
                className={sortBy === 'price_desc' ? styles.text_active : styles.text_non_active}
            >
                Сначала дороже
            </p>
            <p
                onClick={() => handleSortChange('price_asc')}
                className={sortBy === 'price_asc' ? styles.text_active : styles.text_non_active}
            >
                Сначала дешевле
            </p>
            <p
                onClick={() => handleSortChange('newness_desc')}
                className={sortBy === 'newness_desc' ? styles.text_active : styles.text_non_active}
            >
                По новизне
            </p>
        </div>
    );
}

export default SortingField;
