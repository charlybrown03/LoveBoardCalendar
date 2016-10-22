var BaseCollection = Backbone.Collection.extend({

  baseUrl: 'http://localhost:8080',

  endpoint: 'hearts',

  params: {},

  url: function () {
    var endpoint = this.buildEndpoint()
    return this.baseUrl + '/' + endpoint + '?' + $.param(this.params)
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

_.extend(BaseCollection, Backbone.Singleton)

module.exports = BaseCollection
