import styles from './map_field.module.scss'
import FullScreenButton from "../../ButtonComponents/MapButtons/FullScreenButton/FullScreenButton.jsx";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import Marker from '../../assets/icons/Metka.svg'
import DefaultButton from "../../ButtonComponents/DefaultButton/DefaultButton.jsx";
import SelectButton from "../SelectButton/SelectButton.jsx";

function MapField() {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.head_text}>
                    Адрес:
                </p>
                <p className={styles.under_text}>
                    Оренбург, Беляевское шоссе, 16
                </p>
                <YMaps>
                    <div className={styles.map}>
                        <Map width={'100%'} defaultState={{center: [51.719544, 55.143084], zoom: 16}}>
                            <Placemark geometry={[51.719544, 55.143084]}/>
                        </Map>
                    </div>
                </YMaps>
            </div>
            <div className={styles.buttons}>
                <FullScreenButton/>
                <DefaultButton text={'Построить маршрут'}/>
            </div>
        </>
    )
}

export default MapField
