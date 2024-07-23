import styles from './clean_filter.module.scss'
import BucketButton from "../../../ButtonComponents/BucketButton/BucketButton.jsx";
import {Carousel} from 'primereact/carousel'
import RedButton from "../../../ButtonComponents/RedButton/RedButton.jsx";

function CleanFilter({selectedAttributes, onClearFilters}) {
    const filteredAttributes = Object.entries(selectedAttributes).filter(([_, value]) => value !== undefined);

    return (
        <div className={styles.container}>
            <BucketButton onClick={onClearFilters}/>
            {
                filteredAttributes.length > 0 && (
                    <Carousel
                        value={filteredAttributes}
                        itemTemplate={(item) => (
                            <RedButton text={`${item[0]}: ${item[1]}`}/>
                        )}
                        numVisible={3}
                        numScroll={3}
                    />
                )
            }
        </div>
    )
}

export default CleanFilter
