(function () {
  var oldLoadUrl = Backbone.History.prototype.loadUrl

  _.extend(Backbone.History.prototype, {
    /**
     * Override loadUrl & watch return value. Trigger event if no route was matched.
     * @return {Boolean} True if a route was matched
     */
    loadUrl: function () {
      var matched = oldLoadUrl.apply(this, arguments)
      if (!matched) {
        this.trigger('routeNotFound', arguments)
      }
      return matched
    }
  })
}).call(this)
