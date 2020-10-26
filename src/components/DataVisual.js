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
// import { data } from "./data";

export default class DataVisual extends Component {
  state = {
    opacity: {
      active: 1,
      New: 1,
      closed: 1,
      data: this.props.data,
    },
  };

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
        className="shadow-lg p-3 container-lg text-center"
        style={{ width: "80%", height: 300 }}
      >
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={250}
            data={this.props.data}
            margin={{
              top: 15,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />
            <Line
              name="Active cases"
              type="monotone"
              dataKey="Active"
              strokeOpacity={opacity.Active}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              name="Closed cases"
              type="monotone"
              dataKey="closed"
              strokeOpacity={opacity.closed}
              stroke="#c4201b"
              activeDot={{ r: 8 }}
            />
            <Line
              name="New cases"
              type="monotone"
              dataKey="New"
              strokeOpacity={opacity.new}
              stroke="#0fec73"
            />
          </LineChart>
          {/* <p className="notes">Tips: Hover the legend !</p> */}
        </ResponsiveContainer>
      </div>
    );
  }
}
