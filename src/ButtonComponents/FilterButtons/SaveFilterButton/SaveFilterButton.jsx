import styles from './save_filter_button.module.scss';
import React from 'react';
import {useFilterSave} from "../../../Context/FilterSave.jsx";
import {FilterContext} from "../../../Context/ModalContext.jsx";
function SaveFilterButton({ onSave }) {
    const { set_filter_open } = React.useContext(FilterContext);

    function closeFilter() {
        onSave();
        set_filter_open(false);
    }

    return (
        <div onClick={closeFilter} className={styles.container}>
            <p className={styles.text}>
                Применить фильтр
            </p>
        </div>
    );
}

export default SaveFilterButton;
