import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
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
              Sign up
            </Card.Title>
            <Card.Subtitle className="text-muted text-center">
              Please complete your information
            </Card.Subtitle>
            <div style={{ margin: "55px" }}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalName"
                >
                  <Form.Label
                    column
                    sm={4}
                    style={{ color: "#23294B", fontWeight: "bold" }}
                  >
                    Name *
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Invalid name.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalLastName"
                >
                  <Form.Label
                    column
                    sm={4}
                    style={{ color: "#23294B", fontWeight: "bold" }}
                  >
                    Last Name *
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Invalid last name.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalAddress"
                >
                  <Form.Label
                    column
                    sm={4}
                    style={{ color: "#23294B", fontWeight: "bold" }}
                  >
                    Address *
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter an address"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Invalid address.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label
                    column
                    sm={4}
                    style={{ color: "#23294B", fontWeight: "bold" }}
                  >
                    Email *
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter an email"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Invalid email.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalGridOrganization"
                >
                  <Form.Label
                    column
                    sm={4}
                    style={{ color: "#23294B", fontWeight: "bold" }}
                  >
                    Organization *
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Select>
                      <option>UPTC</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPassword"
                >
                  <Form.Label
                    column
                    sm={4}
                    style={{ color: "#23294B", fontWeight: "bold" }}
                  >
                    Password *
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Enter a password"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Invalid password.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalRepeatPassword"
                >
                  <Form.Label
                    column
                    sm={4}
                    style={{ color: "#23294B", fontWeight: "bold" }}
                  >
                    Repeat Password *
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Repeat password"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Invalid password.
                    </Form.Control.Feedback>
                  </Col>
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
                    Sign up
                  </Button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <span style={{ color: "#23294B" }}>
                    Already have an account?&nbsp;
                  </span>
                  <Link
                    to={"/"}
                    style={{ color: "#23294B", fontWeight: "bold" }}
                  >
                    Log in
                  </Link>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
