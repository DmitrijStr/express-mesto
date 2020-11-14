const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/index.js');

const PORT = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '5fae276ec95b1f1963210c5b',
  };
  next();
});
app.use('/', router);

app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
