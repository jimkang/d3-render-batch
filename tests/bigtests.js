var test = require('tape');
var RenderBatch = require('../index');
var d3 = require('d3-selection');
var probable = require('probable');
var idmaker = require('idmaker');

// test('Pause', function pauseHack(t) {
//   window.cont = t.end;
//   // Call `cont()` in the browser console when you're ready to continue.
// });

test('Big test', function bigTest(t) {
  var testBatchRect = [];

  for (var i = 0; i < 1000; ++i) {
    var spec = {
      id: idmaker.randomId(4),
      attr: {
        x: probable.roll(1000),
        y: probable.roll(1000),
        width: probable.roll(500),
        height: probable.roll(500),
        fill: 'hsla(' +
          probable.roll(360) + ', ' +
          probable.roll(100) + '%, ' +
          probable.roll(100) + '%, ' +
          probable.roll(100)/100 + ')'
      },
      class: {
      }
    };

    spec.class[idmaker.randomId(4)] = true;
    var roll = probable.roll(4);
    if (roll < 2) {
      spec.class[idmaker.randomId(4)] = true;
      if (roll < 1) {
        spec.class[idmaker.randomId(4)] = true;
      }
    }

    testBatchRect.push(spec);
  }

  var svg = d3.select('body').append('svg')
    .attr('width', '100%').attr('height', '768px');;

  var renderBatch = RenderBatch();

  renderBatch({
    root: svg,
    tag: 'rect',
    batch: testBatchRect
  });

  t.equal(
    d3.selectAll('rect').size(),
    testBatchRect.length,
    'Correct number of elements created.'
  );

  testBatchRect.forEach(checkProperties);

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
