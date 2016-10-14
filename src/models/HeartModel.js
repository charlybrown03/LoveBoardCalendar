var BaseModel = require('./BaseModel')

var HeartModel = BaseModel.extend({

  defaults: {
    color: 'black',
    size: '2x'
  }

})

module.exports = HeartModel
