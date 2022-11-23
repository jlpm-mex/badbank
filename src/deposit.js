import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import UserContext from './context';
import { useContext, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const createCarouselItems = (users) => {
  return (users.map((user,index)=>{
    return (
      <Carousel.Item key={index}>
        <img
          className="d-block m-auto"
          src={require("./images/usericon.png")}
          alt="First slide"
          style={{ width: "12rem" }}
        />
        <Carousel.Caption>
          <p
            style={{
              margin: "0px",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
              color: "white",
              fontWeight: "bold",
              backgroundColor: "black",
              display: "inline",
              borderRadius: 10,
            }}
          >
            Beneficiario:
          </p>
          <p
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "black",
              WebkitTextFillColor:
                "white" /* Will override color (regardless of order) */,
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
              margin: "0px",
              padding: "0px",
            }}
          >
            {user.name}
          </p>
          <p
            style={{
              margin: "0px",
              padding: "0px",
              paddingRight: "10px",
              paddingLeft: "10px",
              color: "white",
              fontWeight: "bold",
              backgroundColor: "black",
              display: "inline",
              borderRadius: 10,
            }}
          >
            Saldo:
          </p>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "black",
              WebkitTextFillColor:
                "white" /* Will override color (regardless of order) */,
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
              margin: "0px",
              padding: "0px",
            }}
          >
            ${user.balance}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }));
}



export default function Deposit(){
  const ctx = useContext(UserContext);
  const [selUser, setSelUser] = useState(0);
  const [monto, setMonto] = useState('');
  const [userList, setUserList] = useState(ctx.users);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const updateSelUser= (e) => {
    setSelUser(e);
  }

  const crearCarousel = (users)=>{
    return(
    <Carousel style = {{
      backgroundColor:'rgba(217,18,18,.62)'}} 
      interval={null} 
      onSlide={updateSelUser}>
      {createCarouselItems(users)}
    </Carousel>
    );
  }

  const handleOnChangeMonto = (e) => {
    const regex = /^-?[0-9]*[.]?[0-9]*$/;
    if(e.target.value === '' || regex.test(e.target.value)){
       setMonto(e.target.value);
    }else {
      setError('Por favor ingrese un valor numerico');
      setTimeout(() => setError(''), 3000);
    }
  }
  
  const validDeposit = () => {
    if(monto > 0){
      return true;
    }
    setError('Por favor ingrese una valor válido positivo');
    setTimeout(()=> setError(''), 3000);
    return false;
  }


  const onDepositar = () => {
    if(validDeposit()){
      let updatedList = userList.map((user,index)=>{
          if(index === selUser){
            user.balance = Number(user.balance)+Number(monto);
          }
          return user;
      });
      setMonto('');
      setUserList(updatedList);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Depósitos</h1>
        </Col>
      </Row>
      {showSuccess && 
      <Row>
        <Col>
          <Alert variant='success' className="w-75 m-auto mb-4">
            <i className="fa-solid fa-thumbs-up mx-2"></i> Depósito realizado exitosamente
          </Alert>
        </Col>
      </Row>
      }
      {!error ? false : true && 
        <Row>
          <Col>
          <Alert variant='warning' className="w-75 m-auto mb-4">
            <i className ="fa-solid fa-triangle-exclamation mx-2"></i>{error}
          </Alert>
          </Col>
        </Row>
      }
      <Row>
        <Col>
        <Card>
          <Card.Header>
            Desconfia de nosotros, tu dinero aquí no crecera!
          </Card.Header>
          <Card.Body>
            {crearCarousel(userList)}
            <Form>
              <Form.Group className="mb-3" controlId="formMonto">
                <Form.Label>Monto</Form.Label>
                <Form.Control 
                  placeholder="Ingresa el monto a depositar" 
                  onChange={handleOnChangeMonto}
                  value={monto}/>
                <Form.Text className="text-muted">
                  Tu dinero tal vez llegue a tu cuenta, o tal vez no!
                </Form.Text>
              </Form.Group>
              <Button 
                variant="danger" 
                type="submit" 
                onClick={onDepositar}
                disabled ={!monto ? true : false}>
                Depositar
              </Button>
            </Form>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}
