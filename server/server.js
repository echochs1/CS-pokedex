const express = require('express');
const path = require('path');


const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });

module.exports = app;