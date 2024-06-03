import GoBackSvg from '../../assets/icons/GoBack.svg'
import styles from './goback_button.module.scss'
import {useNavigate} from "react-router-dom";
function GoBackButton () {
    const navigate = useNavigate()
    return (
        <button className={styles.container} onClick={() => navigate(-1)}>
            <img className={styles.image} src={GoBackSvg}/>
        </button>
    )
}
export default GoBackButton
