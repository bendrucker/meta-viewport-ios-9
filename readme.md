# meta-viewport-ios-9 [![Build Status](https://travis-ci.org/bendrucker/meta-viewport-ios-9.svg?branch=master)](https://travis-ci.org/bendrucker/meta-viewport-ios-9)

> Viewport meta tag hack for fixing iOS 9's critical WebKit viewport sizing bugs

Workaround was sourced from the [Apple developer forums](https://forums.developer.apple.com/thread/13510).

## Install

```
$ npm install --save meta-viewport-ios-9
```


## Usage

```js
var viewport = require('meta-viewport-ios-9')
//=> {width: 'device-width', ...}

var viewportString = require('meta-viewport-ios-9/string')
//=> width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no
```


## License

MIT © [Ben Drucker](http://bendrucker.me)
