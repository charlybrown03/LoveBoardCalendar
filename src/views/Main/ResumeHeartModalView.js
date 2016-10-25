var ResumeHeartModalView = Marionette.View.extend({

  template: require('./templates/ResumeHeartModalView.hbs'),

  ui: {
    colorSelect: '.select__color',
    sizeSelect: '.select__size'
  },

  onRender: function () {
    this.$el.children().modal('show')
    this.ui.colorSelect.select2({
      minimumResultsForSearch: Infinity
    })
    .val(this.model.get('color')).trigger('change')

    this.ui.sizeSelect.select2({
      minimumResultsForSearch: Infinity
    })
    .val(this.model.get('size')).trigger('change')
  }
})

module.exports = ResumeHeartModalView
