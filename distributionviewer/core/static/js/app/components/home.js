import React from 'react';
import ChartListContainer from './containers/chart-list-container';
import ChartMenuContainer from './containers/chart-menu-container';


class Home extends React.Component {
  render() {
    return (
      <main>
        <ChartMenuContainer query={this.props.location.query} />
        <ChartListContainer query={this.props.location.query} />
      </main>
    );
  }
}

Home.propTypes = {
  location: React.PropTypes.object
}

export default Home;
