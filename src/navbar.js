import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import './css/navbar.css'

const removeActiveMarker = () => {
  const elements = document.getElementsByClassName('active');
  if(elements.length > 0) elements[0].classList.remove('active');
}

export default function NavBar(){

  return(
    <>
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#/" onClick={removeActiveMarker}>
          <img
              alt=""
              src={require("./images/badbankicon.png")}
              width="35"
              height="35"
              className="d-inline-block align-top mx-1"
              style={{backgroundColor:'white', borderRadius:'50%'}}
          />BadBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className = "me-auto">
            <Nav.Link className="myNavBarItem" href="#/CreateAccount/">Create Account</Nav.Link>
            <Nav.Link className="myNavBarItem" href="#/login/">Login</Nav.Link>
            <Nav.Link className="myNavBarItem" href="#/deposit/">Deposit</Nav.Link>
            <Nav.Link className="myNavBarItem" href="#/withdraw/">Withdraw</Nav.Link>
            <Nav.Link className="myNavBarItem" href="#/balance/">Balance</Nav.Link>
            <Nav.Link className="myNavBarItem" href="#/alldata/">AllData</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}