import DefaultButton from "../../ButtonComponents/DefaultButton/DefaultButton.jsx";
import styles from './under_categories.module.scss'
function UnderCategories () {
    return (
        <div className={styles.container}>
            <DefaultButton text={'Подкатегория'} href={'/'} />
            <DefaultButton text={'Подкатегория'} href={'/'}/>
            <DefaultButton text={'Подкатегория'} href={'/'}/>
            <DefaultButton text={'Подкатегория'} href={'/'}/>
            <DefaultButton text={'Подкатегория'} href={'/'}/>
        </div>
    )
}
export default UnderCategories
