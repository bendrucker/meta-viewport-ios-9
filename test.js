'use strict'

var test = require('tape')
var meta = require('./')

test(function (t) {
  t.equal(meta, 'initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no')
  t.end()
})
