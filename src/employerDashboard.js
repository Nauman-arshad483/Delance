import React, { Fragment, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./employerDashboard.css";
import CreateContract from "./createContract";
import ViewRequests from "./viewRequests"
import { Navigate, useNavigate } from "react-router-dom";
import { connectMetamask, getBalance, view_Requests } from "./features";

const EmployerDashboard = () => {
  const [showContractForm, setShowContractForm] = useState(false);
  const [showRequests, setShowRequests] = useState(false);
  const [requestArray,setRequestArray]=useState([]);

  const navigate = useNavigate();
  const run = () => {
    navigate("/Employer/CreateContract");
    setShowContractForm(true);
  };
  const run1 = () => {
    navigate("/Employer/Requests");
   
    view_Requests().then((res)=>{
      setRequestArray(res);
    }).catch((error)=>{
      console.log(error);
    })
    setShowRequests(true);
;
    
  };
  
  useEffect(() => {
    connectMetamask();
    getBalance();
  }, []);

  return (
    <Fragment>
      <div className="section">
        <Container className="emp_dashboard">
          <Row className="dashboard">
            <Col className="dashboard_options">
              <Button variant="light" onClick={run}>
                Create Contract
              </Button>{" "}
            </Col>
            <Col className="dashboard_options">
              <Button variant="light">View Projects</Button>{" "}
            </Col>
            <Col className="dashboard_options">
              <Button variant="light" onClick={run1}>
                View Requests
              </Button>{" "}
              
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contract-form">
        {showContractForm && <CreateContract />}
      </div>
      <div className="requests">
        {showRequests && requestArray.length > 0  && <ViewRequests requestArray={requestArray} />}
      </div>
    </Fragment>
  );
};

export default EmployerDashboard;
