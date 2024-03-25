import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();
  const homeNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="not-found">
        <h1>Oops! Looks like you're lost.</h1>
        <p>
          Please use one of the routes listed above or click the button below.
        </p>
        <Button variant="info" onClick={homeNavigate}>
          Home{" "}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
