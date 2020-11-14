const cardModel = require('../models/card.js');

module.exports.getCards = (req, res) => {
  cardModel.find({})
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'Нет такого файла' });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  cardModel.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(400).send(err));
};

module.exports.deleteCard = (req, res) => {
  cardModel.findByIdAndRemove(req.params.id)
    .orFail(() => new Error('NotFound'))
    .then(() => res.send({ message: 'deleted' }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Not valid Id' });
      } else if (err.message === 'NotFound') {
        res.status(404).send({ message: 'Object not found' });
      } else {
        res.status(500).send({ message: 'Internal server error' });
      }
    });
};
