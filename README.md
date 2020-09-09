# @cfware/csv-parse [![NPM Version][npm-image]][npm-url]

Tiny CSV string parser

## Usage

```js
import parse from '@cfware/csv-parse';
```

### parse(string, maxRows = Infinity)

Parse the JavaScript `string` into an array of rows where each row is an array of
columns.  Setting `maxRows` causes the parse to escape early.

## Attribution

This is based on code from [dom-csv.js] which is based on [ucsv].  The goal of this
rewrite is have the smallest possible ES module which parses CSV.

[npm-image]: https://img.shields.io/npm/v/@cfware/csv-parse.svg
[npm-url]: https://npmjs.org/package/@cfware/csv-parse
[dom-csv.js]: https://github.com/okfn/csv.js
[ucsv]: https://github.com/uselesscode/ucsv
