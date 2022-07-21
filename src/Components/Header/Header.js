import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="NavBar">
      <Container>
        <Navbar.Brand to="/home">Cyber Chassee</Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink to="/addUser">Add User</NavLink>
          <NavLink to="/allUsers">All Users</NavLink>
          <NavLink to="/updateUser">Update User</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
