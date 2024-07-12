import styles from './count_types_field.module.scss'
import Type from "./Type/Type.jsx";
function CountTypesField () {
    return (
        <div className={styles.container}>
            <Type used={true} price={'57 000 руб'} count={'1 000 штук'} />
            <Type used={false} price={'57 000 руб'} count={'1 000 штук'} />
            <Type used={false} price={'57 000 руб'} count={'1 000 штук'} />
            <Type used={false} price={'420 000 руб'} count={'1 машина'} />
        </div>
    )
}

export default CountTypesField
