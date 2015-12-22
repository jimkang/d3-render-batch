var test = require('tape');
var d3-render-batch = require('../index');

var testCases = [
  {
    opts: {
    },
    expected: {
    }
  },
  {
    opts: {
    },
    expected: {
    }
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Basic test', function basicTest(t) {
    t.end();
  });
}
