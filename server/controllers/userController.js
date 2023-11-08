const User = require('../models/userModel')

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log('In createUser');
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    console.log('created user, this is the id:', JSON.stringify(user['_id']));
    const userId = JSON.stringify(user['_id']);
    res.locals.id = userId.substring(1, userId.length - 1);
    next()
  } catch (err) {
    next({
      log: 'Error in userController.createUser ' + err,
      status: 500,
      message: { err: 'Could not create User' },
    })
  }
}

module.exports = userController;