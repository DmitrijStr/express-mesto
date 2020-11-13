// import path from 'path';
// import read from '../utils/read-file.mjs';
import userModer from '../models/user.mjs';

// const pathToData = path.join(path.resolve(), 'data', 'users.json');

export const getUsers = (req, res) => {
  userModer.find({})
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'Нет такого файла' });
    });
};

export const getUser = (req, res) => {
  userModer.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(404).send({ message: 'user not found'});
    });
};

export const postUser = (req, res) => {
  const { name, about, avatar } = req.body;
  userModer.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(400).send(err));
};
