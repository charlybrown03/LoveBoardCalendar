var FooterService = require('./FooterService')
var HeaderService = require('./HeaderService')
var HeartsService = require('./HeartsService')
var MainService = require('./MainService')
var ModalService = require('./ModalService')

module.exports = function () {
  return {
    Footer: new FooterService(),
    Header: new HeaderService(),
    Hearts: new HeartsService(),
    Modal: new ModalService(),
    Main: new MainService()
  }
}
