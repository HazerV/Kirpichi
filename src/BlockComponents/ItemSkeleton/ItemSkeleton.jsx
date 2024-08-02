import {Skeleton} from "primereact/skeleton";
import styles from "./item_skeleton.module.scss";

function ItemSkeleton () {
    return (
        <div className={styles.container}>
            <Skeleton width='180px' height='180px' className={styles.image}/>
            <Skeleton width='100%' height='30px' className={styles.name}/>
            <Skeleton width='80%' height='12px' className={styles.description}/>
            <Skeleton width='60%' height='16px' className={styles.color}/>
            <Skeleton width='40%' height='16px' className={styles.size}/>
            <Skeleton width='50%' height='24px' className={styles.price}/>
        </div>
    )
}

function SkeletonItemsBlock () {
    return (
        <div className={styles.container_block}>
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
        </div>
    )
}

export default SkeletonItemsBlock
