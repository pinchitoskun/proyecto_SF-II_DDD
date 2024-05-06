import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to left, #ffffff 50%, #23294b 50%)",
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card
          style={{
            width: "40rem",
            backgroundColor: "#ECEBF4",
            borderRadius: "20px",
          }}
        >
          <Card.Body>
            <Card.Title
              className="text-center"
              style={{
                color: "#23294B",
                fontSize: "35px",
                fontWeight: "800",
                marginTop: "30px",
              }}
            >
              Welcome back
            </Card.Title>
            <Card.Subtitle className="text-muted text-center">
              Manage your turn
            </Card.Subtitle>
            <div style={{ margin: "55px" }}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label style={{ color: "#23294B", fontWeight: "bold" }}>
                    Email
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label style={{ color: "#23294B", fontWeight: "bold" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid password.
                  </Form.Control.Feedback>
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: "#23294B",
                      fontWeight: "bold",
                      width: "200px",
                      marginTop: "10px",
                    }}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <span style={{ color: "#23294B" }}>
                  Don't have an account yet?&nbsp;
                </span>
                <Link
                  to={"/register"}
                  style={{ color: "#23294B", fontWeight: "bold" }}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
