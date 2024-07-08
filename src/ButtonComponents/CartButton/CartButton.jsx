import styles from './cart_button.module.scss'
import CartSvg from '../../assets/icons/ShoppingCart.svg'
function CartButton () {
    return (
        <div className={styles.container}>
            <img src={CartSvg} />
        </div>
    )
}

export default CartButton
