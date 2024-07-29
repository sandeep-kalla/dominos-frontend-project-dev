/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './styles/cart.css';
import EmptyCart from '../../assets/empty-cart.png';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Add 🍕 to Cart !</h2>
        <h3>No items in the cart</h3>
        <img src={EmptyCart} alt=""/>
      </div>
    );
  }

  const handleRemoveFromCart = (id) => {
    onRemoveFromCart(id);
  };

  return (
    <div className="cart-container">
      <h2>Add 🍕 to Cart !</h2>
      <div id="cart">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} onRemoveFromCart={handleRemoveFromCart} />
        ))}
      </div>
      <div className="total-price-container">
        <h3>Total Price: <span className="total-price" id="total-price">{totalPrice !== null ? `₹${totalPrice.toFixed(2)}` : `₹0.00`}</span></h3>
      </div>
    </div>
  );
};

export default Cart;