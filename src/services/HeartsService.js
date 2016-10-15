var HeartsCollection = require('../collections/HeartsCollection')
var HeartModel = require('../models/HeartModel')

var HeartsService = Marionette.Object.extend({

  channelName: 'heart',

  radioRequests: {
    getAll: 'getAll',
    getOne: 'getOne'
  },

  getAll: function () {
    var collection = new HeartsCollection()
    for (var i = 0; i < 5; i++) {
      collection.add(new HeartModel())
    }
    return collection
  },

  getOne: function () {
    return new HeartModel()
  }

})

module.exports = HeartsService
