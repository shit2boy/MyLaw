import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "./data";

export default class DataVisual extends Component {
  //   static jsfiddleUrl = "https://jsfiddle.net/alidingling/1p40zzfe/";

  state = {
    opacity: {
      active: 1,
      New: 1,
      closed: 1,
      data: [],
    },
  };

  //   componentDidUpdate() {
  // this.setState({ data: data["febuary"] });
  // let dataDetails = data;
  //   for (let index = 0; index < data.length; index++) {
  //     const element = data[index];
  //     //   this.setState({ data: element });
  //     console.log(this.state.data);
  //     console.log(element);
  //     console.log(data[index]);
  //   }
  //   }

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;

    return (
      <div
        className="shadow container text-center"
        style={{ width: "80%", height: 300 }}
      >
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={350}
            data={data["march"]}
            margin={{
              top: 15,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />
            <Line
              type="monotone"
              dataKey="active"
              strokeOpacity={opacity.active}
              stroke="#8884d8"
              //   activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="closed"
              strokeOpacity={opacity.closed}
              stroke="#8884d8"
              //   activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="New"
              strokeOpacity={opacity.new}
              stroke="#82ca9d"
            />
          </LineChart>
          {/* <p className="notes">Tips: Hover the legend !</p> */}
        </ResponsiveContainer>
      </div>
    );
  }
}
