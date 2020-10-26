import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// import utility from "./utility/utility";

import NavigationBar from "./components/NavigationBar";
import DataVisual from "./components/DataVisual";
import Display from "./components/Display";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      months: [],
      month: " january",
      monthInView: [],
    };
  }
  componentDidMount() {
    let months = [];
    axios
      .get(`https://mylaw-server.herokuapp.com/db`)
      .then((res) => {
        if (res.data !== undefined) {
          let data = res.data;
          this.setState({ data: res.data });
          this.setState({ monthInView: data.january });
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              months.push(key);
              this.setState({ months });

              // console.log(this.state.months);
            }
          }
        }
        // console.log(this.state.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  monthInView = (month) => {
    this.setState({ month });
    let object = this.state.data;
    // console.log(object);
    for (const key in object) {
      if (object.hasOwnProperty(key) && key === month) {
        const element = object[key];
        // console.log(element);
        this.setState({ monthInView: element });
      }
    }
  };
  render() {
    return (
      <div className="mb-5">
        <NavigationBar />
        <Display
          data={this.state.months}
          monthInView={this.monthInView}
          month={this.state.month}
        />
        <DataVisual data={this.state.monthInView} />
      </div>
    );
  }
}
