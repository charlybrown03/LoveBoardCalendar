var BaseRouter = require('./BaseRouter')

var NotFoundRouter = BaseRouter.extend({

  initialize: function () {
    this.listenTo(Backbone.history, 'routeNotFound', this.onRouteNotFound)
  },

  onRouteNotFound: function () {
    Backbone.history.navigate('', { trigger: true })
  }

})

module.exports = NotFoundRouter
