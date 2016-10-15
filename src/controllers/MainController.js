var BaseController = require('./BaseController')

var MainView = require('../views/Main/MainView')
var HeartsResumeView = require('../views/Main/HeartsResumeView')

var MainController = BaseController.extend({

  showMain: function () {
    var collection = Radio.channel('heart').request('getAll')
    var view = new MainView()
    Radio.channel('app').trigger('render:region', 'content', view)

    var heartsResumeView = new HeartsResumeView({ collection: collection })
    Radio.channel('main').trigger('render:region', 'heartsResume', heartsResumeView)
  }

})

module.exports = MainController
