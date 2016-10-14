var FooterView = require('../views/Footer/FooterView')

var FooterService = Marionette.Object.extend({

  channelName: 'footer',

  radioRequests: {
    'render': 'render'
  },

  render: function () {
    var view = new FooterView()
    App.rootView.triggerMethod('render:region', 'footer', view)
  }

})

module.exports = FooterService
