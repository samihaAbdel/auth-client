import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../JS/Actions/user";

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [file, setFile] = useState("../assets/default-Img.jpg");
  const dispatch = useDispatch()
  const navigate= useNavigate()

  const handleUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleImg = (e) => {
    setFile(e.target.files[0]);
  };
 const handleRegister =async()=>{
    let data =await new FormData();    
     data.append("name", newUser.name);
     data.append("email", newUser.email);
     data.append("password", newUser.password);
     data.append("image", file);
  dispatch(register(data))
  navigate('/profile')
  
 }
  return (
    <div>
      <h2>Register</h2>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="your name please!!"
              name="name"
              value={newUser.name}
              onChange={handleUser}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="email@example.com"
              name="email"
              value={newUser.email}
              onChange={handleUser}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={newUser.password}
              onChange={handleUser}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            phone
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="phone"
              name="phone"
              value={newUser.phone}
              onChange={handleUser}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Choose your file
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="file"
              name="image"
              onChange={handleImg}
              accept=".png, .jpeg, .jpg"
            />
          </Col>
        </Form.Group>
        <Button variant="success" onClick={handleRegister}>Register</Button>
      </Form>
    </div>
  );
};

export default Register;
