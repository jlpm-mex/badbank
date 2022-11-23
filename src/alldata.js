import { useContext } from "react";
import UserContext from "./context";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const createUserCards = (users) => {
  return users.map((user, index) => {
    console.log(user);
    return (
      <Col key = {index}>
        <Card style={{ width: "18rem", padding: 0 }} className="m-auto my-2">
          <Card.Header style={{ textAlign: "center" }}>
            <h5>Información de Usuario</h5>
          </Card.Header>
          <Card.Img
            variant="top"
            src={require("./images/usericon.png")}
            style={{
              width: "8rem",
              borderRadius: "50%",
              backgroundColor: "green",
            }}
            className="m-auto"
          />
          <Card.Title>
            <Alert className="text-center" variant="primary">
              {user.name}
            </Alert>
          </Card.Title>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <i className="fa-regular fa-envelope mx-1"></i>
              {user.email}
            </li>
            <li>
              <i className="fa-solid fa-coins mx-1"></i>${user.balance}
            </li>
            <li>
              <i className="fa-solid fa-key mx-1"></i>
              {user.password}
            </li>
          </ul>
        </Card>
      </Col>
    );
  });
};

export default function AllData() {
  const ctx = useContext(UserContext);
  return (
    <Container>
      <h3 className="text-center">Usuarios en sistema</h3>
      <hr></hr>
      <Row>{createUserCards(ctx.users)}</Row>
    </Container>
  );
}
