import React, { Fragment, useEffect, useState } from "react";
import "./createContract.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateContract = () => {
  const [freelancerAddress, setFreelancerAddress] = useState("");
  const [deadline, setDeadline] = useState("");
  const createContract = () => {
  console.log("freelancer addreess: " + freelancerAddress);
  console.log("date is: " + deadline);
  };
  return (
    <Fragment>
      <div className="main">
        <div className="header">
          <h1>New Project</h1>
          <h2>Create your new project</h2>
        </div>
        <div className="body">
          <Container>
            <Form>
              <Row className="form-row">
                <Col className="form-col">
                  <Form.Group>
                    <Form.Label>Freelancer Address: </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-elements"
                      onChange={(e) => setFreelancerAddress(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="form-col">
                  <Form.Group>
                    <Form.Label>Date: </Form.Label>
                    <Form.Control
                      type="date"
                      className="form-elements"
                      onChange={(e) => setDeadline(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="form-col">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={createContract}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateContract;
