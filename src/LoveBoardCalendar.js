var ApplicationLayoutView = require('./views/Common/ApplicationLayoutView')

var routers = require('./routers')
var services = require('./services')

var LoveBoardCalendar = Marionette.Application.extend({

  // initializeStorage: function (done) {
  //   this.Storage.Sections = Radio.channel('sections').request('get')
  //   this.Storage.Widgets = Radio.channel('widgets').request('get')
  //   this.Storage.Filters = Radio.channel('filters').request('get')
  //   this.Storage.Metrics = Radio.channel('metrics').request('get')
  //   this.Storage.Dimensions = Radio.channel('dimensions').request('get')

  //   $.when(
  //     this.Storage.Sections.fetch(),
  //     this.Storage.Widgets.fetch(),
  //     this.Storage.Filters.fetch(),
  //     this.Storage.Metrics.fetch(),
  //     this.Storage.Dimensions.fetch()
  //   ).then(done)
  // },

  // getStorage: function () {
  //   var storage = null

  //   if (this.Storage) {
  //     storage = this.Storage
  //   } else {
  //     storage = {

  //       setItem: function (item, value) {
  //         return (this.Vault[item] = value)
  //       },
  //       getItem: function (item) {
  //         if (!this.Vault[item] && this.Vault[item] !== 0) {
  //           return undefined
  //         }

  //         return this.Vault[item]
  //       },
  //       removeItem: function (item) {
  //         if (!this.Vault[item]) {
  //           return false
  //         }
  //         return (delete this.Vault[item])
  //       },

  //       User: new Backbone.Model(window.Cookies.getJSON('user')),
  //       Vault: {}
  //     }
  //   }

  //   return storage
  // },

  onBeforeStart: function (options) {
    this.Routers = routers()
    this.Services = services()
    this.rootView = new ApplicationLayoutView().render()
    // this.Storage = this.getStorage()
  },

  historyStart: function (route) {
    route = route ? route : 'main'
    this.navigate(route)
    // this.Storage.setItem('history', window.history.length)

    // if (!Backbone.History.started) {
    //   Backbone.history.start({
    //     root: '/',
    //     pushState: true
    //   })
    // }

    // if (typeof route !== 'undefined') {
    //   this.navigate(route)
    // } else {
    //   var route = (Backbone.history.fragment !== 'users/login') ? Backbone.history.fragment : ''
    // }
  },

  onStart: function (options) {
    if (Backbone.history){
      Backbone.history.start();
    } else {
      this.navigate('')
    }
    Radio.channel('header').request('render')
    Radio.channel('sidebar').request('render')
    Radio.channel('footer').request('render')
    // if (window.Cookies.get('user')) {
    //   // TODO: Check user credential

    //   this.initializeStorage(function () {
    //     var route = App.Storage.getItem('redirect_to') || undefined
    //     App.Storage.removeItem('redirect_to')
    //     this.historyStart(route)
    //   }.bind(this))
    // } else {
    //   this.historyStart()
    // }
  },

  navigate: function (url, options) {
    var defaults = {
      trigger: true
    }

    options = _.extend(defaults, options || {})

    Backbone.history.navigate(url, options)
  },

  setUrl: function (url) {
    this.navigate(url, { trigger: false })
  }

})

module.exports = LoveBoardCalendar
