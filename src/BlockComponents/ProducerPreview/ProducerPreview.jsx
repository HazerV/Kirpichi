import styles from './producer_preview.module.scss'
import ExampleImg from '../../assets/imgs/ForCategory.png'
function ProducerPreview ({image, text}) {
    image = ExampleImg
    text = 'Венезелинский кирпичный завод'
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={image} />
            <p>
                {text}
            </p>
        </div>
    )
}
export default ProducerPreview
