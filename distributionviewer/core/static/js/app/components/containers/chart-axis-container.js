import React from 'react';
import * as d3Axis from 'd3-axis';
import * as d3Selection from 'd3-selection';

import ChartAxis from '../views/chart-axis';


export class ChartAxisContainer extends React.Component {
  componentWillUpdate() {
    let props = this.props;
    let axisGenerator = props.axisType === 'x' ? d3Axis.axisBottom : d3Axis.axisLeft;

    if (!props.scale) return;

    let axis = axisGenerator(props.scale)
                .tickSizeInner(-props.size)
                .tickSizeOuter(0)
                .tickPadding(10);

    let axisElm = d3Selection.select(`.chart-${props.chartId} .${props.axisType}.axis`);

    if (props.axisType === 'x') {
      axisElm.attr('transform', `translate(0, ${props.size})`).call(axis);
    } else {
      axisElm.call(axis);
    }
  }

  render() {
    return (<ChartAxis axisType={this.props.axisType} />);
  }
}
