var ResumeHeartModalView = require('../views/Main/ResumeHeartModalView')

var ModalService = Marionette.Object.extend({

  channelName: 'modals',

  radioRequests: {
    'show:heart:resume': 'showHeartResume'
  },

  showHeartResume: function (model) {
    var view = new ResumeHeartModalView({ model: model })
    App.rootView.triggerMehod('render:region', 'overlay', view)
  }

})

module.exports = ModalService
