var HeaderView = require('../views/Header/HeaderView')

var HeaderService = Marionette.Object.extend({

  channelName: 'header',

  radioRequests: {
    'render': 'render'
  },

  render: function () {
    var view = new HeaderView()
    App.rootView.triggerMethod('render:region', 'header', view)
  }

})

module.exports = HeaderService
