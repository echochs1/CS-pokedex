const Session = require('../models/sessionModel');
const sessionController = {};

sessionController.createSessionCookie = (req, res, next) => {
  try {
    console.log('Here is the res.locals.id from createSessionCookie:', res.locals.id);
    // req.cookie = ('ssid', req.locals.id, { httpOnly: true });
    next();
  } catch (err) {
    next({
      log: 'Error in userController.createSessionCookie ' + err,
      status: 500,
      message: { err: 'Could not create Session' },
    })
  }
};

sessionController.createSessionDB = async (req, res, next) => {
  // write code here
  try {
    console.log('Here is the res.locals.id from createSessionDB:', res.locals.id);
    await Session.create({
      sessionId: res.locals.id
    });
    next();
  } catch (err) {
    next({
      log: 'Error in userController.createSessionDB ' + err,
      status: 500,
      message: { err: 'Could not create Session' },
    })
  }
};

module.exports = sessionController;