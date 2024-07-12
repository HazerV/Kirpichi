import {useNavigate} from "react-router-dom";
import GoBackSvg from '../../../assets/icons/GoBack.svg'
import styles from './goback_button.module.scss'

function GoBackButton ({type, onClick}) {
    const navigate = useNavigate()
    if (type === 'page') {
        return (
            <button className={styles.container} onClick={() => navigate(-1)}>
                <img className={styles.image} src={GoBackSvg}/>
            </button>
        )
    }
        return (
            <button className={styles.container} onClick={onClick}>
                <img className={styles.image} src={GoBackSvg}/>
            </button>
        )
}

export default GoBackButton
