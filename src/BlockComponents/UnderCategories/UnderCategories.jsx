import DefaultButton from "../../ButtonComponents/DefaultButton/DefaultButton.jsx";
import styles from './under_categories.module.scss'
function UnderCategories () {
    return (
        <div className={styles.container}>
            <DefaultButton text={'Подкатегория 1'} href={'/'} />
            <DefaultButton text={'Подкатегория 2'} href={'/'}/>
            <DefaultButton text={'Подборка'} href={'/'}/>
            <DefaultButton text={'Подборка 1'} href={'/'}/>
            <DefaultButton text={'Подборка 2'} href={'/'}/>
        </div>
    )
}
export default UnderCategories
