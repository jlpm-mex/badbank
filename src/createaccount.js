import { useState, useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import UserContext from "./context";
import Alert from "react-bootstrap/Alert";

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);
  const [btnStatus,setBtnStatus] = useState(false);
  
  useEffect(()=>{
    if(!name && !email && !password){
      setBtnStatus(true);
    }else{
      setBtnStatus(false);
    }
  },[name,email,password]);

  function validate(field, msg) {
    if (!field) {
      setStatus("Error: " + msg);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validatePassword(field, msg){
    if(!field || field.length < 8){
      setStatus("Error: " + msg);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "Por favor ingrese un nombre válido")) return;
    if (!validate(email, "Por favor ingrese un e-mail válido")) return;
    if (!validatePassword(password, "La longitud minima del password es de 8")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <>
    { status &&
    <Alert variant='warning' className="w-75 m-auto mb-4">
      <i className ="fa-solid fa-triangle-exclamation mx-2"></i>{status}
    </Alert>
    }
    { !show && 
      <Alert variant='success' className="w-75 m-auto mb-4">
        <i className="fa-solid fa-thumbs-up mx-2"></i> Usuario creado exitosamente!
      </Alert>
    }
    <Card bg="light" text="black">
      <Card.Header>Crear Cuenta</Card.Header>
      <Card.Body>
        {show ? (
          <>
            Nombre
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Escriba su nombre"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            E-mail
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Escriba su e-mail"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Escriba un password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleCreate}
              disabled = { btnStatus }
            >
              Crear
            </button>
          </>
        ) : (
          <>
            <h5>Felcidades!</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Agregar otra cuenta
            </button>
          </>
        )}
      </Card.Body>
    </Card>
    </>
  );
}
