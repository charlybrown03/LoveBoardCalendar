var BaseRouter = require('./BaseRouter')
var MainController = require('../controllers/MainController')

var MainRouter = BaseRouter.extend({

  appRoutes: {
    '': 'showMain'
  },

  initialize: function () {
    this.controller = new MainController()
  }

})

module.exports = MainRouter
