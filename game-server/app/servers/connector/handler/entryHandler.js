module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};

/**
 * New client entry chat server.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next stemp callback
 * @return {Void}
 */
Handler.prototype.entry = function(msg, session, next) {
   session.bind("admin");
   if(msg.bindMore) {
      session.set("key1", "value1");
      session.set("key2", "value2");
      session.set("key3", "value3");
      session.pushAll();
   }

   next(null, {code: 200, msg: 'game server is ok.'});
};
