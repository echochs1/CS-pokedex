const User = require('../models/userModel')

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log('In createUser');
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    const userId = JSON.stringify(user['_id']);
    console.log('created user, this is user:', JSON.stringify(user['username']));
    console.log('created user, this is the id:', userId.substring(1, userId.length - 1));
    res.locals.id = userId.substring(1, userId.length - 1);
    return next()
  } catch (err) {
    return next({
      log: 'Error in userController.createUser ' + err,
      status: 500,
      message: { err: 'Could not create User' },
    })
  }
}

module.exports = userController;