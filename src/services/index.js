var FooterService = require('./FooterService')
var HeaderService = require('./HeaderService')
var MainService = require('./MainService')

module.exports = function () {
  return {
    Footer: new FooterService(),
    Header: new HeaderService(),
    Main: new MainService()
  }
}
