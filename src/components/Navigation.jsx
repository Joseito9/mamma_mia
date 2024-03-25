import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

const Navigation = () => {
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-light text-decoration-none"
      : "text-dark text-decoration-none";

  const { totalPrice } = useContext(PizzaContext);

  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand className="text-white">
            <NavLink className={activeClass} to="/">
              🍕 Pizzeria Mamma Mia
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand>
              <NavLink className={activeClass} to="/cart">
                🛒 ${totalPrice().toLocaleString("es-CL")}
              </NavLink>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
