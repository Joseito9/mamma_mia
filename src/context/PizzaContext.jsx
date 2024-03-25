import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [cart, setCart] = useState([]);

  const jsonData = "./public/pizzas.json";

  const getPizzas = async () => {
    try {
      const response = await axios.get(jsonData);
      if (response.status === 200) {
        setPizza(response.data);
      } else {
        throw new Error("Data Not Found");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const specificPizza = (id) => {
    const pizzaDetails = pizza.find((item) => item.id === id);
    setSelectedPizza(pizzaDetails);
  };

  const addToCart = (item) => {
    const existingItem = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItem].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const increase = (item) => {
    const updatedCart = [...cart];
    const itemId = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemId !== -1) {
      updatedCart[itemId].quantity += 1;
      setCart(updatedCart);
    }
  };

  const decrease = (item) => {
    const updatedCart = [...cart];
    const itemId = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemId !== -1) {
      if (updatedCart[itemId].quantity > 1) {
        updatedCart[itemId].quantity -= 1;
      } else {
        updatedCart.splice(itemId, 1);
      }
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizza,
        selectedPizza,
        specificPizza,
        cart,
        addToCart,
        totalPrice,
        increase,
        decrease,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
