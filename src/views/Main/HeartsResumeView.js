var HeartModel = require('../../models/HeartModel')

var HeartsResumeView = Marionette.View.extend({

  template: require('./templates/HeartsResumeView.hbs'),

  className: 'resume-container col-xs-2 pull-right',

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

  detail: false,

  initialize: function () {
    this.listenTo(this.detail, 'change', this.render)
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

  serializeData: function () {
    return {
      collection: this.collection.toJSON(),
      length: this.collection.length,
      detail: this.detail
    }
  },

  onClickHeartElement: function (e) {
    var id = $(e.currentTarget).data('id')

    if (!id) {
      this.onClickChangeDetail(id)
      return
    }

    var heart = this.collection.get(id)
    Radio.channel('modals').request('show:heart:resume', heart)

    // heart.set('color', 'green')
    // heart.save()
    // heart.destroy()
  },

  onClickChangeDetail: function (id) {
    var $el = this.$el[0]

    if (this.detail) {
      $($el).removeClass('col-xs-12').addClass('col-xs-2')
    } else {
      $($el).removeClass('col-xs-2').addClass('col-xs-12')
    }
    this.detail = !this.detail
    this.render()
  }

})

module.exports = HeartsResumeView
