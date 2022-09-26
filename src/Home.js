import {React,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fragment } from 'react';

const Home = () => {
  useEffect(() => {
   console.log("requesting");
   if(window.ethereum){
    console.log("metamask detected");
   }
   else{
    console.log("metamask not detected");
   }
  }, [])
  
  return (
    <Fragment>

    <div className="main">
      
      <header className="header">
        <div className="head">
        <h1>Welcome to Delance</h1>
        </div>
      </header>
     
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>

    </div>
  </Fragment>
  )
}

export default Home