import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import routerMethod from './routes/index.mjs';

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

app.use(express.static(path.join(path.resolve(), 'public')));
app.use('/', routerMethod);

app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
