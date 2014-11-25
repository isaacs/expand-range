# expand-range [![NPM version](https://badge.fury.io/js/expand-range.svg)](http://badge.fury.io/js/expand-range)

> Faster, bash-like range expansion. Expand a range of numbers or letters, uppercase or lowercase. See the benchmarks.

## Benchmarks

```bash
node benchmark
```

## Example usage

```js
var expand = require('expand-range');
```

**Params**

```js
expand(start, stop, increment);
```

 - `start`: the number or letter to start with
 - `end`: the number or letter to end with
 - `increment`: optionally pass the increment to use. works for letters or numbers

**Examples**

```js
expand('1..3')
//=> ['1', '2', '3']

expand('1..3')
//=> ['1', '2', '3']

expand('0..-5')
//=> [ '0', '-1', '-2', '-3', '-4', '-5' ]

expand('-9..9..3')
//=> [ '-9', '-6', '-3', '0', '3', '6', '9' ])

expand('-1..-10..-2')
//=> [ '-1', '-3', '-5', '-7', '-9' ]

expand('1..10..2')
//=> [ '1', '3', '5', '7', '9' ]

expand('a..e')
//=> ['a', 'b', 'c', 'd', 'e']

expand('a..e..2')
//=> ['a', 'c', 'e']

expand('A..E..2')
//=> ['A', 'C', 'E']
```

### Custom function

Optionally pass a custom function as the third or fourth argument:

```js
expand('a..e', function (val, isLetter, i) {
  if (isLetter) {
    return String.fromCharCode(val) + i;
  }
  return val;
});
//=> ['a0', 'b1', 'c2', 'd3', 'e4']
```

## Install
### Install with [npm](npmjs.org):

```bash
npm i expand-range --save-dev
```

## Run tests

```bash
npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/expand-range/issues).

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on November 25, 2014._


[unicode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode