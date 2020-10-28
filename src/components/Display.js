import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import { data } from "./data";

export class Display extends Component {
  render() {
    const { monthInView } = this.props;
    let requestInProgress = [];
    monthInView.map((request) => requestInProgress.push(request.Active));

    console.log(requestInProgress);
    let sum = requestInProgress.reduce((a, b) => a + b, 0);

    return (
      <div className="container mb-5">
        <div className="row ">
          <div className="col-sm shadow result">
            <p className="p-2">Request in progress</p>
            <strong className="d-block text-lefts display-4">{sum}</strong>
          </div>
          <div className="col-sm shadow result">
            <p className="p-2">Lawyers available</p>
            <strong className="text-left d-block display-4">
              {this.props.monthInView.length}
            </strong>
          </div>
          <div className="col-sm shadow result">
            <p className="p-2">New cases today</p>
            <strong className=" d-block text-left display-4">5</strong>
          </div>
        </div>
        <Dropdown className=" mt-5">
          <Dropdown.Toggle
            className="px-4 text-capitalize"
            variant="default"
            style={{ background: "#ddd" }}
          >
            {this.props.month}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {this.props.data.map((month, index) => (
              <Dropdown.Item
                as="button"
                onClick={() => {
                  this.props.selectedMonth(month);
                }}
                key={index}
              >
                {month}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Display;
