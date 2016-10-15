var MainView = Marionette.View.extend({

  template: require('./templates/MainView.hbs'),

  className: 'main__page',

  regions: {
    heartsResume: {
      el: '.resume-container',
      replaceElement: true
    }
  },

  channel: 'main',

  initialize: function () {
    var radioChannel = Radio.channel(this.channel)
    this.listenTo(radioChannel, 'render:region', this.onRenderRegion.bind(this))
  },

  onRenderRegion: function (region, view) {
    this.showChildView(region, view)
  }

})

module.exports = MainView
