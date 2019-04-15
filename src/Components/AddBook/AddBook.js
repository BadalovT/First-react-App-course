import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';



class AddBook extends Component {

    changeHandler= e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler =  e =>{
        this.setState({loading: true})
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users/${this.state.id}', this.state)
            .then (res=>{
                this.setState({persons:res.data,loading: false, success: true})
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
            <Label for="examplePassword">Password</Label>
            <Input placeholder="id" type="text" name="id" onChange={this.changeHandler} />
            </FormGroup>
            <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
            </FormGroup>
            <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input  placeholder="id" type="text" name="id" onChange={this.changeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input  placeholder="id" type="text" name="id" onChange={this.changeHandler}/>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button type="submit">Submit</Button>
        </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AddBook
