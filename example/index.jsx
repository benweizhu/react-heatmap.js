import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class ReactHeatmapExample extends React.Component {
  render(){
    return (
      <div>Hello ReactHeatmapExample</div>
    );
  }
}

ReactDom.render(<ReactHeatmapExample/>, document.querySelector('#app'));
