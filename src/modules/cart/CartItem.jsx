/* eslint-disable react/prop-types */
import './styles/cart-item.css';
const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
        <img src={item.assets.menu['0'].url} alt="pizza11" className="cart-item-image"/>
        <p>{item.name}</p>
        <p>₹ {item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button className="remove-btn" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
    </div>
  )
}

export default CartItem
