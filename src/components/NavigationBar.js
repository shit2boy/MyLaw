import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export class NavigationBar extends Component {
  render() {
    return (
      <div className="mb-5">
        <Navbar
          style={{ position: "relative" }}
          className="navbar-background text-white"
          collapseOnSelect
          expand=""

          // variant="#ffffff"
        >
          <Navbar.Brand
            style={{ position: "relative", left: "13%" }}
            href="#home"
          >
            Lawyer Dashbord
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="" href="#deets">
                Sign Up
              </Nav.Link>
              <Nav.Link href="#memes">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className=" logo-background">
          <p className=" logo">
            my<span className="text-warning">Law</span>
          </p>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
