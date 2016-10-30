var HeartsCollection = require('../collections/HeartsCollection')
var HeartModel = require('../models/HeartModel')

var HeartsService = Marionette.Object.extend({

  channelName: 'heart',

  radioRequests: {
    getAll: 'getAll',
    getOne: 'getOne'
  },

  getAll: function () {
    return new HeartsCollection()
  },

  getOne: function () {
    return new HeartModel()
  }

})

module.exports = HeartsService
