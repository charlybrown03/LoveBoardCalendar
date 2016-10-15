var BaseController = require('./BaseController')

var MainView = require('../views/Main/MainView')

var MainController = BaseController.extend({

  showMain: function () {
    var collection = Radio.channel('heart').request('getAll')
    var view = new MainView({ collection: collection })
    Radio.channel('app').trigger('render:region', 'content', view)
  }

})

module.exports = MainController
