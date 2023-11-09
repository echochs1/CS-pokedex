const User = require('../models/userModel')
const mongoose = require('mongoose');
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
    // console.log('req.body.ssid', req.body.ssid);
    const { name, level, gender, ability, nature, item } = req.body;
    const user = await User.findOneAndUpdate(
      { '_id': new mongoose.Types.ObjectId(req.body.ssid) },
      { $push: { box: { name, level, gender, ability, nature, item } } },
      { returnDocument: 'after' }
      );
    console.log('this is found user:', user);

    return next()
  } catch (err) {
    return next({
      log: 'Error in userController.addToBox ' + err,
      status: 500,
      message: { err: 'Could add to box' },
    })
  }
}

module.exports = userController;