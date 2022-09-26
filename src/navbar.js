import React, { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
const Navi = () => {
  return (
    <Nav activeKey="/home" className="navi">
      <Nav.Item className="item">
        <Nav.Link href="/Freelancer">Freelancer</Nav.Link>
      </Nav.Item>
      <Nav.Item className="item">
        <Nav.Link href="/Employer">Employer</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navi;
