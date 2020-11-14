const userModer = require('../models/user.js');

module.exports.getUsers = (req, res) => {
  userModer.find({})
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'Нет такого файла' });
    });
};

module.exports.getUser = (req, res) => {
  userModer.findById(req.params.id)
    .orFail(() => new Error('NotFound'))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Not valid Id' });
      } else if (err.message === 'NotFound') {
        res.status(404).send({ message: 'User not found' });
      } else {
        res.status(500).send({ message: 'internal server error' });
      }
    });
};

module.exports.postUser = (req, res) => {
  const { name, about, avatar } = req.body;
  userModer.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(400).send(err));
};
