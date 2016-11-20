var BaseModel = Backbone.Model.extend({

  baseUrl: 'http://charly-api.tk',

  endpoint: 'heart',

  params: {},

  url: function () {
    var url = Backbone.Model.prototype.url.apply(this, arguments)
    var params = (Object.keys(this.params).length) ? ('?' + $.param(this.params)) : ''
    return url + params
  },

  urlRoot: function () {
    var endpoint = this.buildEndpoint()
    // this.params.token = App.Storage.User.get('token')

    return this.baseUrl + '/' + endpoint
  },

  getPathParams: function () {
    var route = Backbone.Router.prototype._routeToRegExp(this.endpoint)
    var args = Backbone.Router.prototype._extractParameters(route, this.endpoint)

    return args.slice(0, -1)
  },

  buildEndpoint: function () {
    var endpoint = this.endpoint
    var params = this.getPathParams()

    _.each(params, function (param) {
      if (this.get([param.slice(1)])) {
        endpoint = endpoint.replace(param, this.get([param.slice(1)]))
      }
    }.bind(this))

    return endpoint
  }

})

module.exports = BaseModel
