/* eslint-disable react/prop-types */

import Button from '../../../shared/widgets/Button';
import './styles/product.css';

const Product = ({ pizza, onAddToCart }) => {
  return (
    <div className="box">
      <img src={pizza.assets.menu['0'].url} alt="pizza10" className="product-image" />
      <h2 className="product-title">{pizza.name}</h2>
      <p className="product-price">₹ {pizza.price}</p>
      <p className="product-description">{pizza["menu_description"]}</p>
      <Button style={"add-to-cart-btn"} onClick={() => onAddToCart(pizza)} />
    </div>
  );
};

export default Product;