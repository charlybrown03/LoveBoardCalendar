var ModalView = Marionette.CompositeView.extend({

  tagName: 'div',
  className: 'overlay__container',

  onBeforeRender: function () {
    $('select').each(function () {
      if ($(this).data('select2')) {
        $(this).select2('close')
      }
    })
  }

})

module.exports = ModalView
