const Ssid = require('../models/ssidModel');
const sessionController = {};

// sessionController.sessionCookie = (req, res, next) => {
//   try {
//     console.log('Here is the res.locals.id from createSessionCookie:', res.locals.id);
//     req.cookie = ('session', res.locals.id, { httpOnly: true });
//     return next();
//   } catch (err) {
//     return next({
//       log: 'Error in userController.createSessionCookie ' + err,
//       status: 500,
//       message: { err: 'Could not create Session' },
//     })
//   }
// };

sessionController.sessionDB = async (req, res, next) => {
  // write code here
  try {
    console.log('Here is the res.locals.id from createSessionDB:', res.locals.id);
    await Ssid.create({
      sessionId: res.locals.id
    });
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