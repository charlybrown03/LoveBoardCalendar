var BaseRouter = Marionette.AppRouter.extend({

  isAuthenticated: function () {
    var mainFragment = 'main'
    var user = window.Cookies.getJSON('user')

    if (!user) {
      if (Backbone.history.fragment !== mainFragment) {
        // App.Storage.setItem('redirect_to', Backbone.history.fragment)
      }
      App.navigate(mainFragment)
      return false
    }
  },

  onRoute: function () {
    $('.popover').remove()
  }

})

module.exports = BaseRouter
