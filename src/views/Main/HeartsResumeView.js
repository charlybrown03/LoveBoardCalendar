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
    heart.save()
    .then(function (response, status) {
      heart.set('id', response.id)
      this.collection.add(heart)
    }.bind(this))
  },

  onClickHeartElement: function (e) {
    var heart = this.collection.get($(e.currentTarget).data('id'))
    Radio.channel('modals').request('show:heart:resume', heart)

    // heart.set('color', 'green')
    // heart.save()
    // heart.destroy()
  }

})

module.exports = HeartsResumeView
