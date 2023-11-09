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
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.createUser ' + err,
      status: 500,
      message: { err: 'Could not create User' },
    });
  }
}

userController.login = async (req, res, next) => {
  try {
    console.log('In login');
    const user = await User.findOne(
      {
        username: req.body.username,
        password: req.body.password,
      },
      '_id'
    );

    if (!user) {
      throw new Error;
    }

    res.locals.id = user['_id'].toString();
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.login ' + err,
      status: 500,
      message: { err: 'Invalid login' },
    });
  }
}

userController.addToBox = async (req, res, next) => {
  try {
    console.log('In userController.addToBox');
    // console.log('req.body.ssid', req.body.ssid);
    const { name, level, gender, ability, nature, item, gif } = req.body;
    const user = await User.findOneAndUpdate(
      { '_id': new mongoose.Types.ObjectId(req.body.ssid) },
      { $push: { box: { name, level, gender, ability, nature, item, gif } } },
      { returnDocument: 'after' }
      );
    console.log('this is found user:', user);

    return next()
  } catch (err) {
    return next({
      log: 'Error in userController.addToBox ' + err,
      status: 500,
      message: { err: 'Could not add to box' },
    });
  }
}

userController.getBoxData = async (req, res, next) => {
  try {
    console.log('In userController.getBoxData');
    const boxData = await User.findOne(
      { '_id': new mongoose.Types.ObjectId(req.body.ssid) }
    )
    console.log('here is BoxData', boxData);
    res.locals.boxData = boxData;
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.getBoxData ' + err,
      status: 500,
      message: { err: 'Could not get box' },
    });
  }
}

module.exports = userController;