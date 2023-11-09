const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const PORT = 3000;

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/pokeapp';
mongoose.connect(mongoURI);

const authRouter = require('./routes/auth')
const boxRouter = require('./routes/box');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/auth', authRouter);
app.use('/box', boxRouter);

app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../build', '../index.html'));
});

app.use('*', (err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });

module.exports = app;