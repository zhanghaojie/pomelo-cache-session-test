
module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};


Handler.prototype.chat = function(msg, session, next) {
  next(null, {code: 200, msg: 'Session: ' + session.id + "--" + session.frontendId + "--" + session.uid});
};
