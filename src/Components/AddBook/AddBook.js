import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';



class AddBook extends Component {
  constructor(props) {
    super(props);
      this.state = {
        posts:[],
        name:"",
        category:"",
        about:"",
        img:""
      }
  }
  
    changeHandler= e => {
        this.setState({[e.target.name]: e.target.value});

    }
    submitHandler =  e =>{
        this.setState({loading: true})
        e.preventDefault()
        axios.post('jsonplaceholder.typicode.com/photos', this.state)
            .then (res=>{
                this.setState({posts:res.data,loading: false, success: true})
                    console.log(res)
            }).catch((e) => {
              this.setState({loading: false, error: true})
          })
          };


  render() {
    return (
      <div>
        <br/><br/>
        <Container>
          <Row>
            <Col md="6">
            <Form onSubmit={this.submitHandler}>
            <FormGroup>
            <Label for="name">Kitab Adi</Label>
            <Input id="name"  placeholder="Adi daxil edin" type="text" name="name" onChange={this.changeHandler} />
            </FormGroup>
            <FormGroup>
            <Label for="Category">Kategoriya</Label>
            <Input id="Category" type="select" onChange={this.changeHandler} name="category" id="exampleSelect">
                <option></option>
                <option>Drama</option>
                <option>Antiutopik</option>
                <option>Romantik</option>
                <option>Trajedik</option>
            </Input>
            </FormGroup>
            <FormGroup>
          <Label for="About">Kitab haqqinda</Label>
          <Input id="About"  placeholder="Kitab haqqinda melumat daxil edin" type="textarea" name="about" onChange={this.changeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="img">Shekil</Label>
          <Input  id="img" type="file" name="img" onChange={this.changeHandler}/>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button type="submit">Elave at</Button>
        </Form>
            </Col>
            <Col md="6">
              <div className="firstLook">
                  <Row>
                    <Col md="5">
                    <div className="book-img">
                      
                        <img alt="sdvs" src={this.state.img}/>
                    </div>
                    </Col>
                    <Col md="7">
                        <h3>
                          {this.state.name}
                        </h3>
                        <p>{this.state.category}</p>
                    </Col>
                    <Col md="12">
                    <div>
                      <p> {this.state.about}</p>
                    </div>
                    </Col>
                  </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AddBook
