var MainView = Marionette.View.extend({

  template: require('./templates/MainView.hbs'),

  tagName: 'div',
  className: 'main__page',

  ui: {
    addHeartButton: '.add-heart__button',
    heartsContainer: '.hearts-container'
  },

  events: {
    'click @ui.addHeartButton': 'onClickAddHeartButton'
  },

  onRender: function () {
    // this.ui.content.html('Hello World!')
  },

  onClickAddHeartButton: function (e) {
    $(e.currentTarget).blur()
    $(this.ui.heartsContainer).append('<i class="fa fa-3x fa-heart-o"></i>')
  }

})

module.exports = MainView
