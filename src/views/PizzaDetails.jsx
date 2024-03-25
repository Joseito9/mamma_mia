import { useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

const PizzaDetails = () => {
  const { id } = useParams();
  const { selectedPizza, specificPizza, addToCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  useEffect(() => {
    specificPizza(id);
  }, [id, specificPizza]);

  if (!selectedPizza) {
    navigate("*");
    return null;
  }
  return (
    <div className="gallery-detail">
      <Card className="mb-3" key={selectedPizza.id}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Card.Body>
              <Card.Title>{selectedPizza.name}</Card.Title>
              <Card.Text>{selectedPizza.desc}</Card.Text>
              <Card.Title>Ingredientes:</Card.Title>
              <ul>
                {selectedPizza.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕{ingredient}</li>
                ))}
              </ul>
            </Card.Body>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="image-container">
              <Card.Img
                src={selectedPizza.img}
                className="m-4"
                style={{ width: "400px", height: "350px" }}
              />
            </div>
          </div>
        </div>
        <div className="price-btn-container">
          <h4> Precio: $ {selectedPizza.price.toLocaleString("es-CL")}</h4>
          <Button variant="danger" onClick={() => addToCart(selectedPizza)}>
            Añadir 🛒
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PizzaDetails;
