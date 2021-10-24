import React from "react";
import ReactDOM from "react-dom";

import { IgrItemLegend } from "igniteui-react-charts";
import { IgrItemLegendModule } from "igniteui-react-charts";
import { IgrPieChart } from "igniteui-react-charts";
import { IgrPieChartModule } from "igniteui-react-charts";
import { IgrPieChartBase } from "igniteui-react-charts";
import { IIgrPieChartBaseProps } from "igniteui-react-charts";
import { IgrSliceClickEventArgs } from "igniteui-react-charts";

IgrPieChartModule.register();
IgrItemLegendModule.register();

export default class PieChartSelection extends React.Component {
  data;
  chart;
  legend;

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          MarketShare: 37,
          Company: "Space Cooling",
          Summary: "Space Cooling 37%",
        },
        {
          MarketShare: 25,
          Company: "Residential Appliance",
          Summary: "Residential Appliance 25%",
        },
        { MarketShare: 12, Company: "Heating", Summary: "Heating 12%" },
        { MarketShare: 8, Company: "Lighting", Summary: "Lighting 8%" },
        {
          MarketShare: 18,
          Company: "Other Services",
          Summary: "Other Services 18%",
        },
      ],
    };

    this.onPieRef = this.onPieRef.bind(this);
    this.onLegendRef = this.onLegendRef.bind(this);
  }

  render() {
    return (
      <div className="container sample">
        <label className="legend-title">
          Global Electricity Demand by Energy Use
        </label>
        <div className="options vertical">
          <IgrItemLegend ref={this.onLegendRef} orientation="Horizontal" />
        </div>

        <div className="container">
          <IgrPieChart
            dataSource={this.state.data}
            ref={this.onPieRef}
            labelMemberPath="Summary"
            valueMemberPath="MarketShare"
            width="100%"
            height="450px"
            selectionMode="multiple"
            selectedSliceStroke="white"
            selectedSliceFill="rgb(143,143,143)"
            selectedSliceOpacity="1.0"
            selectedSliceStrokeThickness="2"
            labelsPosition="OutsideEnd"
            labelExtent="30"
            legendLabelMemberPath="Summary"
            radiusFactor={0.7}
            selectedItem="1"
            startAngle={-60}
          />
        </div>
      </div>
    );
  }

  onPieRef(chart) {
    if (!chart) {
      return;
    }

    this.chart = chart;
    if (this.legend) {
      this.chart.legend = this.legend;
    }
  }

  onLegendRef(legend) {
    if (!legend) {
      return;
    }

    this.legend = legend;
    if (this.chart) {
      this.chart.legend = this.legend;
    }
  }
}
