var HeartModel = require('../../models/HeartModel')

var MainView = Marionette.View.extend({

  template: require('./templates/MainView.hbs'),

  tagName: 'div',
  className: 'main__page',

  ui: {
    addHeartButton: '.add-heart__button',
    heartsContainer: '.hearts-container'
  },

  collectionEvents: {
    'add remove': 'render'
  },

  events: {
    'click @ui.addHeartButton': 'onClickAddHeartButton'
  },

  onClickAddHeartButton: function (e) {
    $(e.currentTarget).blur()
    this.collection.add(new HeartModel())
  }

})

module.exports = MainView
