var HeartModel = require('../../models/HeartModel')

var HeartsResumeView = Marionette.View.extend({

  template: require('./templates/HeartsResumeView.hbs'),

  className: 'resume-container',

  ui: {
    addHeartButton: '.add-heart__button',
    heartsContainer: '.hearts-container',
    heartElement: '.heart-element'
  },

  collectionEvents: {
    'sync add remove': 'render'
  },

  events: {
    'click @ui.addHeartButton': 'onClickAddHeartButton',
    'click @ui.heartElement': 'onClickHeartElement'
  },

  onClickAddHeartButton: function (e) {
    $(e.currentTarget).blur()
    var heart = new HeartModel()
    this.collection.add(heart)
    heart.save()
  },

  onClickHeartElement: function (e) {
    console.log(this.collection.get($(e.currentTarget)))
  }

})

module.exports = HeartsResumeView
