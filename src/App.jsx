import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Cart from "./views/Cart";
import Home from "./views/Home";
import PizzaDetails from "./views/PizzaDetails";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzadetails/:id" element={<PizzaDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
