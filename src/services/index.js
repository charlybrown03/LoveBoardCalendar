var FooterService = require('./FooterService')
var HeaderService = require('./HeaderService')
var HeartsService = require('./HeartsService')
var MainService = require('./MainService')

module.exports = function () {
  return {
    Footer: new FooterService(),
    Header: new HeaderService(),
    Hearts: new HeartsService(),
    Main: new MainService()
  }
}
