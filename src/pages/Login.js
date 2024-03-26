import React, { useState } from 'react'
import {Form, Col, Row, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../JS/Actions/user'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [user, setUser] = useState({email:'', password:''})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUser=(e)=>{
    setUser({...user, [e.target.name]:e.target.value})
  }

  const handleLogin=()=>{
    dispatch(login(user))
    navigate('/profile')
  }
  return (
    <div> <h2>Login</h2>
    <Form>   
  
   <Form.Group as={Row} className="mb-3" >
     <Form.Label column sm="2">
     email
     </Form.Label>
     <Col sm="10">
       <Form.Control type="email" placeholder="email@example.com"
       name='email' value={user.email}  onChange={handleUser}/>
     </Col>
   </Form.Group>
   <Form.Group as={Row} className="mb-3" >
     <Form.Label column sm="2">
       Password
     </Form.Label>
     <Col sm="10">
       <Form.Control type="password" placeholder="Password" 
       name='password' value={user.password}  onChange={handleUser}/>
     </Col>
   </Form.Group>
   
   <Button variant='success' onClick={handleLogin}>Login</Button>
 </Form></div>
  )
}

export default Login