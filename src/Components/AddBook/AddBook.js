import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddBook extends Component {
  render() {
    return (
      <div>
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
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button>Submit</Button>
        </Form>


         <form onSubmit={this.submitHandler}>
            <div>
                <input placeholder="id" type="text" name="id" onChange={this.changeHandler}/>
            </div>
            <div>
                <input placeholder="name" type="text" name="name"  onChange={this.changeHandler}/>
            </div>
            <div>
                <input placeholder="username" type="text" name="username"  onChange={this.changeHandler}/>
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddBook
