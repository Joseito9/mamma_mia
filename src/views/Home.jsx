import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {
  const { pizza, specificPizza, addToCart } = useContext(PizzaContext);
  const Navigate = useNavigate();
  const handleDetails = (id) => {
    specificPizza(id);
    Navigate(`/pizzadetails/${id}`);
  };

  const handleCart = (item) => {
    addToCart(item);
  };

  return (
    <>
      <div className="gallery">
        {pizza.map((item) => (
          <Card key={item.id}>
            <Card.Img className="card-img" variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              Ingredientes:
              <ul className="text-start">
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>
              <h4> Precio: $ {item.price.toLocaleString("es-CL")}</h4>
              <div className="btn-container">
                <Button
                  variant="info"
                  key={item.id}
                  onClick={() => handleDetails(item.id)}
                >
                  Detalles 👀
                </Button>
                <Button variant="danger" onClick={() => handleCart(item)}>
                  Añadir 🛒
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
