import React from 'react';
import * as d3Shape from 'd3-shape';
import * as d3Selection from 'd3-selection';
import { connect } from 'react-redux';

import ChartLine from '../views/chart-line';


export default class ChartLineContainer extends React.Component {
  componentWillUpdate() {
    let props = this.props;
    let line = d3Shape.line()
                .x(d => {return props.xScale(d.x);})
                .y(d => {return props.yScale(d.y);});

    d3Selection.select(`.chart-${props.chartId} .line`).datum(props.data).attr('d', line);
  }

  render() {
    return (<ChartLine />);
  }
}
