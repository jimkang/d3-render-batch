d3-render-batch
==================

An abstraction for d3-selection that renders (enter, update, exit) an array of specs for DOM elements that all share the same kind of HTML or SVG tag.

Installation
------------

    npm install d3-render-batch

Usage
-----

    var RenderBatch = require('d3-render-batch');
    var renderBatch = RenderBatch({
      // TODO: opts
    });

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

`renderBatch` will then do a data join with the given array of specs, using a key function that uses the `id` property to match datum and enter/update/exit (create new DOM elements representing new array element, update all of the attributes and class, and remove DOM elements not represented in the array).

Tests
-----

Instal browserify globally. Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
