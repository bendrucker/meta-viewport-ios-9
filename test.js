'use strict'

var test = require('tape')
var string = require('./string')

test(function (t) {
  t.equal(string, 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no')
  t.end()
})
