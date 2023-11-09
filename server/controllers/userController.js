const User = require('../models/userModel')

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log('In createUser');
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    console.log('created user, this is user:', JSON.stringify(user['username']));
    console.log('created user, this is the id:', user['_id'].toString());
    res.locals.id = user['_id'].toString();
    return next()
  } catch (err) {
    return next({
      log: 'Error in userController.createUser ' + err,
      status: 500,
      message: { err: 'Could not create User' },
    })
  }
}

userController.addToBox = async (req, res, next) => {
  try {
    console.log('In userController.addToBox');
    // const user = await User.findOne({
    //   '_id': r
    // });
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