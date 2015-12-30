var test = require('tape');
var RenderBatch = require('../index');
var d3 = require('d3-selection');

// test('Pause', function pauseHack(t) {
//   window.cont = t.end;
//   // Call `cont()` in the browser console when you're ready to continue.
// });

test('Basic test', function basicTest(t) {
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

  var svg = d3.select('body').append('svg');

  var renderBatch = RenderBatch();

  renderBatch({
    root: svg,
    tag: 'rect',
    batch: testBatch
  });

  t.equal(
    d3.selectAll('rect').size(), 3, 'Correct number of elements created.'
  );

  testBatch.forEach(checkProperties);

  function checkProperties(spec) {
    var el = d3.select('#' + spec.id);
    t.ok(!el.empty(), 'Element was created for spec with id ' + spec.id);
    for (var attrKey in spec.attr) {
      t.equal(
        el.attr(attrKey),
        spec.attr[attrKey].toString(),
        attrKey + ' is correct.'
      );
    }

    for (var classKey in spec.class) {
      t.ok(el.class(classKey), 'Class ' + classKey + ' is set.');
    }
  }

  t.end();
});
