var RenderBatch = require('../index');
var d3 = require('d3-selection');

var testBatch = [
  {
    id: 'pipe-body',
    attr: {
      x: 10,
      y: 10,
      width: 200,
      height: 80,
      fill: 'hsla(0, 0%, 0%, 0.5)'
    },
    class: {
      pipe: true
    }
  },
  {
    id: 'pipe-cap-A',
    attr: {
      x: 0,
      y: 0,
      width: 20,
      height: 100,
      fill: 'hsla(0, 0%, 0%, 0.5)'
    },
    class: {
      pipe: true
    }
  },
  {
    id: 'pipe-cap-B',
    attr: {
      x: 200,
      y: 0,
      width: 20,
      height: 100,
      fill: 'hsla(0, 0%, 0%, 0.5)'
    },
    class: {
      pipe: true
    }
  }
];

var renderBatch = RenderBatch();

var svg = d3.select('body').append('svg');

renderBatch({
  root: svg,
  tag: 'rect',
  batch: testBatch
});
