const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router.post('/signup', userController.createUser, (req, res) => {
  console.log('hit router post signup');
  res.status(200).end();
});

module.exports = router;