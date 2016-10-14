var MainRouter = require('./MainRouter')
var NotFoundRouter = require('./NotFoundRouter')

module.exports = function () {
  return {
    MainRouter: new MainRouter(),
    NotFound: new NotFoundRouter()
  }
}
