'use strict'

var meta = require('meta-string')
var SCALE = 1

module.exports = meta({
  width: 'device-width',
  'initial-scale': SCALE,
  'minimum-scale': SCALE,
  'maximum-scale': SCALE,
  'user-scalable': 'no',
  'shrink-to-fit': 'no'
})
