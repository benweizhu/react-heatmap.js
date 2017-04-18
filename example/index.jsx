import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import ReactHeatmap from 'react-heatmap';

class ReactHeatmapExample extends React.Component {
  render(){
    return (
      <div><ReactHeatmap /></div>
    );
  }
}

ReactDom.render(<ReactHeatmapExample/>, document.querySelector('#app'));
