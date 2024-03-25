import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { PizzaContext } from "../context/PizzaContext";

const Cart = () => {
  const { cart, totalPrice, increase, decrease } = useContext(PizzaContext);

  const handlePay = () => {
    if (cart.length === 0) {
      Swal.fire({
        title: "Empty Cart",
        text: "Your shopping cart is empty. Add products before checkout.",
        icon: "warning",
      });
    } else {
      Swal.fire({
        title: "Redirecting to Payment",
        text: "Redirecting to payment...",
        icon: "success",
      });
    }
  };

  return (
    <>
      <section>
        <h2>Detalle del pedido</h2>
      </section>
      <div className="cart-gallery">
        {cart.map((item) => (
          <Card key={item.id} className="mb-3">
            <div className="d-flex align-items-center m-2">
              <Card.Img
                src={item.img}
                className="imgCart"
                style={{ width: "200px" }}
              />
              <div className="flex-grow-1 p-3">
                <Card.Title>
                  <h4>{item.name}</h4>
                </Card.Title>
                <Card.Text>
                  Price: ${item.price.toLocaleString("es-CL")}
                </Card.Text>
              </div>
              <div className="d-flex align-items-center">
                <Button
                  className="m-2"
                  variant="primary"
                  onClick={() => decrease(item)}
                >
                  -1
                </Button>
                <Card.Text className="cart-text mt-3">
                  {item.quantity}
                </Card.Text>
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => increase(item)}
                >
                  +1
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <section className="d-flex justify-content-center">
        <p className="total-cart">
          Total: ${totalPrice().toLocaleString("es-CL")}
        </p>
        <Button variant="success m-2" onClick={handlePay}>
          Checkout
        </Button>
      </section>
    </>
  );
};

export default Cart;
