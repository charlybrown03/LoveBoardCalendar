var ApplicationLayoutView = Marionette.View.extend({

  el: '#app',

  template: require('./templates/ApplicationLayoutView.hbs'),

  regions: {
    header: '.app__header',
    sidebar: '.app__sidebar',
    content: '.app__content',
    footer: '.app__footer',
    overlay: '.app__overlay'
  },

  initialize: function () {
    var radioChannel = Radio.channel('app')
    this.listenTo(radioChannel, 'render:region', this.onRenderRegion)
  },

  onRenderRegion: function (region, view) {
    App.rootView.getRegion(region).show(view)
  }

})

module.exports = ApplicationLayoutView
