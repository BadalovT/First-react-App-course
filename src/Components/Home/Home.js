import React, { Component } from 'react'
// import { Container, Row, Col } from 'reactstrap';
import Slider from '../Slider/Slider';
import Courses from '../Courses/Courses';
import About from '../About/About';

 

class Home extends Component {
  render() {
    return (
      <>
          <Slider/>
          <Courses/>
          <About/>
      </>
    )
  }
}
export default Home;
