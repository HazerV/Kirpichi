import styles from './save_filter_button.module.scss';
import React from 'react';
import { FilterContext } from '../../../Context/ModalContext.jsx';

function SaveFilterButton({ onSave }) {
    const { set_filter_open } = React.useContext(FilterContext);

    function close_filter() {
        set_filter_open(false);
        onSave();  // Вызываем функцию для сохранения фильтров и обновления URL
    }

    return (
        <div onClick={close_filter} className={styles.container}>
            <p className={styles.text}>
                Применить фильтр
            </p>
        </div>
    );
}

export default SaveFilterButton;
