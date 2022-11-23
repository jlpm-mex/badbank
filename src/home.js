import {Card} from 'react-bootstrap'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Home(){
  return (
    <Card className="m-auto" style={{ width: '50%' }} >
      <Card.Header className="text-center">
        <h4>Banco de la desconfianza</h4>
      </Card.Header>
      <Card.Img src={require("./images/logo.webp")} variant="top"></Card.Img>
      <Card.Body>
        <Card.Title>
          Bienvenido
        </Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
          El banco donde no cuidamos tus fondos, y cualquiera te puede desfalcar.
        </Card.Text>
      </Card.Body>
    </Card>
  );  
}
