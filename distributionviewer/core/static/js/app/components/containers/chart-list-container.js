import React from 'react';
import { connect } from 'react-redux';

import { ChartList } from '../views/chart-list';
import * as metricApi from '../../api/metric-api';


class ChartListContainer extends React.Component {
  componentDidMount() {
    metricApi.getMetrics(this.props.query);
  }

  render() {
    return (
      <ChartList {...this.props} />
    );
  }
}

ChartListContainer.propTypes = {
  items: React.PropTypes.array.isRequired,
  query: React.PropTypes.object
}

const mapStateToProps = function(store) {
  return {
    items: store.metricState.items
  };
};

export default connect(mapStateToProps)(ChartListContainer);
