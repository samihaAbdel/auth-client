import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/Actions/user";
import { useNavigate } from "react-router-dom";
const NavBare = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(isAuth);
const handleLogout = ()=>{
  dispatch(logout())
  navigate('/')
}
  return (
    <div>
      {" "}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Auth</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuth ? (
              <div style={{display:'flex'}}>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </div>
            ) : (
              <div  style={{display:'flex'}}>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBare;
