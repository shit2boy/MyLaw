import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { data } from "./data";

export class Display extends Component {
  render() {
    return (
      <div className="container mb-5">
        <div className="row ">
          <div className="col-sm shadow result">
            <p className="p-2">Request in progress</p>
            <strong className="d-block text-lefts display-4">17</strong>
          </div>
          <div className="col-sm shadow result">
            <p className="p-2">Lawyers available</p>
            <strong className="text-left d-block display-4">15</strong>
          </div>
          <div className="col-sm shadow result">
            <p className="p-2">New cases today</p>
            <strong className=" d-block text-left display-4">5</strong>
          </div>
        </div>
        <Dropdown className="pl-3 mt-5">
          <Dropdown.Toggle
            variant="default"
            style={{ background: "#ddd", border: "1px solid" }}
          >
            This Month
          </Dropdown.Toggle>

          {/* {data.map((month, index) => ( */}
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">month</Dropdown.Item>
            {/* <Dropdown.Item href="#/action-2">{month}</Dropdown.Item> */}
            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
          {/* ))} */}
        </Dropdown>
      </div>
    );
  }
}

export default Display;
