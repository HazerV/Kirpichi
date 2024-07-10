import styles from './bucket_button.module.scss'
import TrashBucketSvg from '../../assets/icons/TrashBucket.svg'
function BucketButton () {
    return (
        <div className={styles.container}>
            <img src={TrashBucketSvg} alt="Trash Image"/>
        </div>
    )
}

export default BucketButton
