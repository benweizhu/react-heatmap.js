# react-heatmap.js

A React Component based on [heatmap.js][b7fa289f].

  [b7fa289f]: https://www.patrick-wied.at/static/heatmapjs/ "heatmap.js"

```
yarn add react-heatmap.js
```

```javascript
import React from 'react';
import ReactDom from 'react-dom';
import ReactHeatmap from 'react-heatmap.js';

class ReactHeatmapExample extends React.PureComponent {
  render() {
    const config = {
      radius: 10,
      maxOpacity: 0.5,
      minOpacity: 0,
      blur: 0.75
    };
    const points = [];
    const width = 840;
    const height = 400;
    let max = 0;
    let len = 300;

    while (len--) {
      const val = Math.floor(Math.random() * 100);
      // now also with custom radius
      const radius = Math.floor(Math.random() * 70);

      max = Math.max(max, val);
      const point = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        value: val,
        // radius configuration on point basis
        radius
      };
      points.push(point);
    }

    return (
      <div style={{ width: '840px', height: '400px' }}>
        <ReactHeatmap configObject={config} max={max} data={points} />
      </div >
    );
  }
}

ReactDom.render(<ReactHeatmapExample />, document.querySelector('#app'));

```
For more configuration, take [docs.html][747485cf] as reference.

  [747485cf]: https://www.patrick-wied.at/static/heatmapjs/docs.html "docs.html"
