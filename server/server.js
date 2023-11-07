const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
// app.use(cors());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });

module.exports = app;