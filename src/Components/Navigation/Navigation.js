import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Books from '../Books/Books';
import AddBook from '../AddBook/AddBook';

import  "./Navigation.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
   } from 'reactstrap';
import AddForum from '../AddForum/AddForum';

  library.add(faHome);


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Router>
          <div  className="header">
          <Container>
          <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link exact className="nav-link" to="/"><FontAwesomeIcon icon={faHome} /></Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">Haqqimizda</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/books">Kitablar</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Əlavə et
                </DropdownToggle>
                <DropdownMenu right>
                <Link  to="/AddBook">
                  <DropdownItem>
                      Kitab
                  </DropdownItem>
                  </Link>
                  <Link  to="/AddForum">
                  <DropdownItem>
                      Sorgu
                  </DropdownItem>
                  </Link>
                  {/* <DropdownItem divider /> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
          </Container>
          </div>
         
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/books" component={Books}/>
          <Route path="/addbook" component={AddBook}/>
          <Route path="/addforum" component={AddForum}/>



        </Switch>
        </Router>
      </div>
    );
  }
}

export default Navigation;