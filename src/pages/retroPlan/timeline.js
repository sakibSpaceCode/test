import { Paper } from "@material-ui/core";
import moment from "moment";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class RetroTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Bob",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-08").getTime(),
              ],
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-11").getTime(),
              ],
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-11").getTime(),
                new Date("2019-03-16").getTime(),
              ],
            },
          ],
        },
        {
          name: "Joe",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-05").getTime(),
              ],
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-06").getTime(),
                new Date("2019-03-09").getTime(),
              ],
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-10").getTime(),
                new Date("2019-03-19").getTime(),
              ],
            },
          ],
        },
      ],
      options: {
        chart: {
          height: 50,
          type: "rangeBar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "50%",
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            var a = moment(val[0]);
            var b = moment(val[1]);
            var diff = b.diff(a, "days");
            return diff + (diff > 1 ? " days" : " day");
          },
        },
        fill: {
          type: "colors",
          colors: ["#618EFF", "#FBB752", "#FF5D53"],
        },
        xaxis: {
          type: "datetime",
          position: "top",
          labels: {
            datetimeFormatter: {
              year: "yyyy",
            },
          },
        },
        yaxis: {
          show: false,
        },
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <Paper id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="rangeBar"
          height={550}
        />
      </Paper>
    );
  }
}
export default RetroTimeLine;
