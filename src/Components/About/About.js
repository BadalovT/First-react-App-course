import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import  First from '../img/first.jpg'
import "./About.css"





class About extends Component {
  render() {

    return (
      <div className="about">
       <Container>
        <div className="block">
        <div className="h1">
            <h1>Haqqimizda</h1>
        </div>
        <Row>
        <Col md="4">
        <img src={First} alt="img"/>
        </Col>
        <Col md="8">
        <h3>svdsdvsvsdvsdv</h3>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         </Col>
        </Row>
        </div>
      </Container>
      </div>
    )
  }
}
export default About;