import React, { Fragment, useEffect, useState } from "react";
import {
  create_request,
  getAssignedProjectDetails,
  view_Requests,
} from "./features";
import "./freelancerDashboard.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ViewRequestsF from "./viewRequestsF";
import Col from "react-bootstrap/Col";
// import { Navigate, useNavigate } from "react-router-dom";

const FreelancerDashboard = () => {
  const [deadline, setDeadline] = useState();
  const [price, setPrice] = useState();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [showRequest, setShowRequest] = useState(false);
  // const navigate = useNavigate();
  const [requestArray, setRequestArray] = useState([]);

  useEffect(() => {
    let dead = getAssignedProjectDetails();
    dead
      .then((res) => {
        setDeadline(Number(res.deadline));
        console.log(res);
        setPrice(Number(res.eth_price));
      })
      .catch((error) => {
        console.log(error);
      });

      view_Requests()
      .then((res) => {
        setRequestArray(res);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

const run2 = (e) => {
    e.preventDefault();
    console.log("harry");
    setShowRequest(true);
  
  };
  const createRequest = () => {
    create_request(title, amount);
  };

  return (
    <Fragment>
      <div className="main">
        <div className="header">
          <h1>Welcome</h1>
          <h2>your project Details</h2>
        </div>
        <div className="body">
          <div className="project-details">
            <h4>Deadline</h4>
            <span className="deadline">{deadline} Days</span>
            <h4>Budget</h4>
            <span className="budget">{price}</span>
          </div>
          <div className="deliver-work">
            <h3>Deliver Work</h3>
            <Form>
              <Row className="form-row">
                <Col className="form-col">
                  <Form.Group>
                    <Form.Label>Title: </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-elements"
                      onChange={(e) => setTitle(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="form-col">
                  <Form.Group>
                    <Form.Label>Amount: </Form.Label>
                    <Form.Control
                      type="Number"
                      className="form-elements"
                      onChange={(e) => setAmount(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="form-col">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={createRequest}
                  >
                    Create Request
                  </Button>
                  <Button
                    variant="primary"
                    type="button "
                    className="vr_button"
                    onClick={run2}
                  >
                    View Request
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <div className="requests">
          {showRequest && requestArray.length > 0 && (
            <ViewRequestsF requestArray={requestArray} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default FreelancerDashboard;
