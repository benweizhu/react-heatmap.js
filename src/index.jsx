import React from 'react';
import ReactDOM from 'react-dom';
import Heatmap from 'heatmap.js';

class ReactHeatmap extends React.Component {

  componentDidMount() {
    const configObject = Object.assign({
      container: ReactDOM.findDOMNode(this)
    }, this.props.configObject);

    this.heatmap = Heatmap.create(configObject);

    this.setData(this.props.min, this.props.max, this.props.data);
  }

  componentWillReceiveProps(newProps) {
    this.setData(newProps.max, newProps.data);
  }

  setData = (min, max, data) => {
    this.heatmap.setData({ min, max, data });
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} />
    );
  }
}

ReactHeatmap.propTypes = {
  max: React.PropTypes.number,
  min: React.PropTypes.number,
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  configObject: React.PropTypes.object
};

ReactHeatmap.defaultProps = {
  max: 5,
  min: 0,
  data: [],
  configObject: {}
};

export default ReactHeatmap;
