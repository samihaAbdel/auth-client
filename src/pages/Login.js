import React from 'react'
import {Form, Col, Row, Button} from 'react-bootstrap'
const Login = () => {
  return (
    <div> <h2>Login</h2>
    <Form>   
  
   <Form.Group as={Row} className="mb-3" >
     <Form.Label column sm="2">
     email
     </Form.Label>
     <Col sm="10">
       <Form.Control type="email" placeholder="email@example.com" />
     </Col>
   </Form.Group>
   <Form.Group as={Row} className="mb-3" >
     <Form.Label column sm="2">
       Password
     </Form.Label>
     <Col sm="10">
       <Form.Control type="password" placeholder="Password" />
     </Col>
   </Form.Group>
   
   <Button variant='success'>Login</Button>
 </Form></div>
  )
}

export default Login