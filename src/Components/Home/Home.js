import React, { Component } from 'react'
// import { Container, Row, Col } from 'reactstrap';
import Slider from '../Slider/Slider';
import Books from '../Books/Books';
import About from '../About/About';

 

class Home extends Component {
  render() {
    return (
      <>
          <Slider/>
          <Books/>
          <About/>
      </>
    )
  }
}
export default Home;
