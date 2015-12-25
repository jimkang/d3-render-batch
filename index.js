var d3Selection = require('d3-selection');
var accessor = require('accessor');

function RenderBatch(createOpts) {
  var d3;
  if (createOpts) {
    d3 = createOpts.d3;
  }

  if (!d3) {
    d3 = d3Selection;
  }

  var keyFn = accessor();

  function renderBatch(opts) {
    var root;
    var tag;
    var batch;

    if (opts) {
      root = opts.root;
      tag = opts.tag;
      batch = opts.batch;
    }

    if (root instanceof HTMLElement) {
      root = d3.select(root);
    }
    debugger;

    var update = root.selectAll(tag).data(batch, keyFn);
    update.enter().append(tag);
  }

  return renderBatch;
}

module.exports = RenderBatch;
