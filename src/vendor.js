window.jQuery = window.$ = require('jquery')
window._ = require('lodash')
window.Tether = require('tether')

window.Backbone = require('backbone')
window.Backbone.$ = window.$
window.Marionette = require('backbone.marionette')
window.Radio = require('backbone.radio')

var ColorHash = require('color-hash')
window.ColorHash = new ColorHash()

window.$.ajaxSetup({
  cache: false
})

require('backbone.routefilter')
require('./helpers/Backbone.Singleton')
require('./helpers/Backbone.sync')
require('./helpers/routeNotFound')

require('datatables.net-bs')(window, window.$)
require('./helpers/datatables.natural.sorting')
require('datatables.net-fixedheader')(window, window.$)
require('datatables.net-responsive')(window, window.$)

require('bootstrap/dist/js/bootstrap')
window.Cookies = require('js-cookie')
require('select2/dist/js/select2.full')
require('fontawesome-iconpicker/dist/js/fontawesome-iconpicker')

window.moment = require('moment')
require('bootstrap-daterangepicker')
window.Highlight = require('highlight.js')
