var test = require('tape');
var RenderBatch = require('../index');
var d3 = require('d3-selection');

// test('Pause', function pauseHack(t) {
//   window.cont = t.end;
//   // Call `cont()` in the browser console when you're ready to continue.
// });

test('Basic test', function basicTest(t) {
  var renderBatch = RenderBatch();

  renderBatch({
    root: d3.select('body'),
    tag: 'rect',
    batch: [
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
    ]
  });

  t.equal(
    d3.selectAll('rect').size(), 3, 'Correct number of elements created.'
  );

  t.end();
});
