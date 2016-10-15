var HeartModel = require('../../models/HeartModel')

var HeartsResumeView = Marionette.View.extend({

  template: require('./templates/HeartsResumeView.hbs'),

  className: 'resume-container',

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

module.exports = HeartsResumeView
