const Ssid = require('../models/ssidModel');
const sessionController = {};

sessionController.verifySession = async (req, res, next) => {
  try {
    console.log('In verifySession');
    console.log('req.body is', req.body);
    const query = await Ssid.findOne({
      sessionId: req.body.ssid
    })
    console.log(query)
    if (query) return next();
    else res.status(401).json('invalid session');
  } catch (err) {
    return next({
      log: 'Error in sessController.verifySession ' + err,
      status: 500,
      message: { err: 'Could not verify session' },
    })
  }
};

sessionController.sessionDB = async (req, res, next) => {
  // write code here
  try {
    console.log('Here is the res.locals.id from createSessionDB:', res.locals.id);
    // const str = res.locals.id;
    await Ssid.create({
      sessionId: res.locals.id
    });
    // res.locals.session = query.sessionId;
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.createSessionDB ' + err,
      status: 500,
      message: { err: 'Could not create Session' },
    })
  }
};

module.exports = sessionController;