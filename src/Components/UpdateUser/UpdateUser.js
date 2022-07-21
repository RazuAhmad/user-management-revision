import { Button, Form } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [selectedUser, setSelectedUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:7000/user/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedUser(data));
  }, [id]);

  const handleNameUpdate = (e) => {
    const updateName = e.target.value;
    const updateUserDetails = {
      name: updateName,
      email: selectedUser.email,
      password: selectedUser.password,
    };
    setSelectedUser(updateUserDetails);
  };

  const handleEmailUpdate = (e) => {
    const updateEmail = e.target.value;
    const updateUserDetails = {
      name: selectedUser.name,
      email: updateEmail,
      password: selectedUser.password,
    };
    setSelectedUser(updateUserDetails);
  };

  const handlePasswordUpdate = (e) => {
    const updatePassword = e.target.value;
    const updateUserDetails = {
      // name: selectedUser.name,
      // email: selectedUser.email,
      // password: updatePassword,
      ...selectedUser,
    };
    updateUserDetails.password = updatePassword;
    setSelectedUser(updateUserDetails);
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();

    fetch(`http://localhost:7000/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Want to update existing data?");
          setSelectedUser({});
        }
      });
  };

  return (
    <Form className="Form-Container" onSubmit={handleUpdateForm}>
      <h3>
        Welcome updating user:{" "}
        <span style={{ color: "red" }}>{selectedUser.name}</span>
      </h3>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          value={selectedUser.name || " "}
          onChange={handleNameUpdate}
          type="text"
          placeholder="Enter Name"
        />
        <Form.Text className="text-muted">
          Update your existing name if necessary.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={selectedUser.email || " "}
          type="email"
          placeholder="Enter email"
          onChange={handleEmailUpdate}
        />
        <Form.Text className="text-muted">
          Update your existing email if necessary.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={selectedUser.password || " "}
          type="password"
          placeholder="Password"
          onChange={handlePasswordUpdate}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UpdateUser;
