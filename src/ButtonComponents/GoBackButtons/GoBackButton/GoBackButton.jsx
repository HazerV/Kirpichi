import GoBackSvg from '../../../assets/icons/GoBack.svg'
import styles from './goback_button.module.scss'
import {useNavigate} from "react-router-dom";
import React from "react";
import {FilterContext} from "../../../Context/ModalContext.jsx";

function GoBackButton ({type}) {
    const {is_filter_open, set_filter_open, is_sorting_open, set_sorting_open} = React.useContext(FilterContext)
    function handleClickFilter () {
        if (is_filter_open === true) {
            set_filter_open(false)
        }
    }
    function handleClickSorting () {
        if (is_sorting_open === true) {
            set_sorting_open(false)
        }
    }
    const navigate = useNavigate()
    if (type === 'page') {
        return (
            <button className={styles.container} onClick={() => navigate(-1)}>
                <img className={styles.image} src={GoBackSvg}/>
            </button>
        )
    } else if (type === 'filtering') {
        return (
            <button className={styles.container} onClick={handleClickFilter}>
                <img className={styles.image} src={GoBackSvg}/>
            </button>
        )
    } else if (type === 'sorting') {
        return (
            <button className={styles.container} onClick={handleClickSorting}>
                <img className={styles.image} src={GoBackSvg}/>
            </button>
        )
    }

}

export default GoBackButton
