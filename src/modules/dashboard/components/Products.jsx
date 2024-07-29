/* eslint-disable react/prop-types */
import Product from './Product';

import './styles/products.css';

const Products = (props) => {
  const pizzas = props.data;
  const onAddToCart = props.onAddToCart;

  return (
    <>
    
    <div className="main-container">
        <div className="container" id="pizza">
        {
          
          pizzas.map((pizza, index) => (
            <Product key={index} pizza={pizza} onAddToCart={onAddToCart} />
          ))
        }
        </div>
        
    </div>
    </>
  );
};

export default Products;