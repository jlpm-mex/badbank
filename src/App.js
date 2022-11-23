import "./App.css";
import { Route, HashRouter } from "react-router-dom";
import React from "react";
import NavBar from "./navbar";
import Home from "./home";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./alldata";
import UserContext from "./context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Spa() {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
          <HashRouter>
            <UserContext.Provider
              value={{
                users: [
                  {
                    name: "abel",
                    email: "abel@mit.edu",
                    password: "secret",
                    balance: 100,
                  },
                ],
              }}
            >
              <div className="container" style={{ padding: "20px" }}>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/alldata/" component={AllData} />
              </div>
            </UserContext.Provider>
          </HashRouter>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return <Spa />;
}

export default App;
