/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Products from "./Products";
import Loading from "../../../shared/widgets/Loading";
import Cart from "../../cart/Cart";

const DashBoard = ({url}) => {
  const [loading, setLoading] = useState(true);
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
      console.log('link ',url)
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const pizzas = await response.json();
      setTimeout(() => {
        setPizzas(pizzas);
        setLoading(false);
        
      }, 2500); 
    } catch (err) {
      setError(err);
      console.error(error);
      setLoading(false);
    }
  };

  const handleAddToCart = (pizza) => {
    const existingItem = cartItems.find((item) => item.id === pizza.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === pizza.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
    toast.success(`${pizza.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleRemoveFromCart = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem.quantity > 1) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      toast.info(`${existingItem.name} quantity decreased!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setCartItems(cartItems.filter((item) => item.id !== id));
      toast.error(`${existingItem.name} removed from cart!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Products data={pizzas} onAddToCart={handleAddToCart} />
          <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        </>
      )}
    </div>
  );
};

export default DashBoard;
