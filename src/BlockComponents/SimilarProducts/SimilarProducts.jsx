import styles from './similar_products.module.scss'
import DefaultButton from "../../ButtonComponents/DefaultButton/DefaultButton.jsx";
function SimilarProducts ({text}) {
    return (
        <div className={styles.container}>
            <p className={styles.head_text}>
                {text}
            </p>
            <div className={styles.block}>
                <DefaultButton text={'Утолщенный кирпич'}/>
                <DefaultButton text={'Утолщенный кирпич'}/>
            </div>
        </div>
    )
}

export default SimilarProducts
