var BaseCollection = require('./BaseCollection')
var HeartModel = require('../models/HeartModel')

var HeartsCollection = BaseCollection.extend({

  model: HeartModel

})

module.exports = HeartsCollection
