var BaseController = require('./BaseController')

var MainView = require('../views/Main/MainView')

var MainController = BaseController.extend({

  showMain: function () {
    var view = new MainView()
    Radio.channel('app').trigger('render:region', 'content', view)
  }

})

module.exports = MainController
