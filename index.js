'use strict'

var meta = require('meta-string')
var SCALE = 1.0001

module.exports = meta({
  'initial-scale': SCALE,
  'minimum-scale': SCALE,
  'maximum-scale': SCALE,
  'user-scalable': 'no'
})
