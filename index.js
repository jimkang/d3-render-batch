var d3Selection = require('d3-selection');
require('d3-selection-multi'); // This is a plugin.
var accessor = require('accessor');

var keyFn = accessor();

function RenderBatch(createOpts) {
  var d3;
  if (createOpts) {
    d3 = createOpts.d3;
  }

  if (!d3) {
    d3 = d3Selection;
  }

  function setAttr(d) {
    d3.select(this)
      .attrs(d.attr)
      .attr('id', d.id);
  }

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

    var update = root.selectAll(tag).data(batch, keyFn);
    update.enter().append(tag);
    update.each(setAttr);
  }

  return renderBatch;
}

module.exports = RenderBatch;
