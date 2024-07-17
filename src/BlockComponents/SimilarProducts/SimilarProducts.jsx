import styles from './similar_products.module.scss'
import DefaultButton from "../../ButtonComponents/DefaultButton/DefaultButton.jsx";
function SimilarProducts ({key, text, name, route}) {
    return (
        <div className={styles.container}>
            <p className={styles.head_text}>
                Похожие товары:
            </p>
            <div className={styles.block}>
                <DefaultButton text={name} href={route}/>
            </div>
        </div>
    )
}

export default SimilarProducts
