# react-heatmap

A React Component based on [heatmap.js][b7fa289f].

  [b7fa289f]: https://www.patrick-wied.at/static/heatmapjs/ "heatmap.js"

```javascript
import React from 'react';
import ReactDom from 'react-dom';
import ReactHeatmap from 'react-heatmap';

class ReactHeatmapExample extends React.Component {
  render() {
    var points = [];
    var max = 0;
    var width = 840;
    var height = 400;
    var len = 300;

    while (len--) {
      var val = Math.floor(Math.random() * 100);
      // now also with custom radius
      var radius = Math.floor(Math.random() * 70);

      max = Math.max(max, val);
      var point = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        value: val,
        // radius configuration on point basis
        radius: radius
      };
      points.push(point);
    }

    return (
      <div style={{ width: '840px', height: '400px' }}>
        < ReactHeatmap max= { max } data= { points } unit= "notPercent" />
      </div >
    );
  }
}

ReactDom.render(<ReactHeatmapExample />, document.querySelector('#app'));

```
