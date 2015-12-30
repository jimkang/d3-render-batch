var RenderBatch = require('../index');
var d3 = require('d3-selection');
var probable = require('probable');
var idmaker = require('idmaker');
var fps = require('fps');

var ticker = fps({
  every: 50
});

ticker.on('data', reportFramerate);

var displayBox = d3.select('body').append('div');
displayBox.append('span').text('FPS:');
fpsDisplay = displayBox.append('span').attr('id', 'frame-rate-display');

function reportFramerate(framerate) {
  fpsDisplay.text(framerate);
};

var renderBatch = RenderBatch();

var batchSize = 1000;

var ids = [];
for (var i = 0; i < batchSize; ++i) {
  ids.push(idmaker.randomId(4));
}

var classSpecs = [];

for (var i = 0; i < batchSize; ++i) {
  var classSpec = {};
  classSpec[idmaker.randomId(4)] = true;
  var roll = probable.roll(4);
  if (roll < 2) {
    classSpec[idmaker.randomId(4)] = true;
    if (roll < 1) {
      classSpec[idmaker.randomId(4)] = true;
    }
  }

  classSpecs.push(classSpec);
}   

var svg = d3.select('body').append('svg')
  .attr('width', '100%').attr('height', '768px');;

function renderNewTestBatch() {
  // TODO: hrtime measurement.
  var testBatchRect = [];

  for (var i = 0; i < batchSize - probable.roll(~~(batchSize * 0.8)); ++i) {
    var spec = {
      id: ids[i],
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
      class: classSpecs[i]
    };

    testBatchRect.push(spec);
  }

  renderBatch({
    root: svg,
    tag: 'rect',
    batch: testBatchRect
  });

  ticker.tick();
}

setInterval(renderNewTestBatch, 1000 / 60);
