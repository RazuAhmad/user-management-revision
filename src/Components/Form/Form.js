import React from "react";
import "./Form.css";
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useState } from "react";

const FormComponent = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogIn, setIsLogIn] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    const name = nameRef?.current?.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const newUser = { name, email, password };
    console.log(newUser);

    fetch("http://localhost:7000/user/insertUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  };
  return (
    <Form className="Form-Container" onSubmit={handleForm}>
      <h2 style={{ textAlign: "center", margin: "24px 0px 34px 0px" }}>
        Welcome To our {isLogIn ? "Login" : "Sign up"} Page
      </h2>
      {!isLogIn && (
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            required
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
          />
          <Form.Text className="text-muted">
            We'll never share your name with anyone.
          </Form.Text>
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          ref={emailRef}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={() => {
            setIsLogIn(!isLogIn);
          }}
          type="checkbox"
          label="Already have an Account?"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {isLogIn ? "Log in" : "Submit"}
      </Button>
    </Form>
  );
};

export default FormComponent;
