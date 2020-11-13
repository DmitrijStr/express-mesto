// import path from 'path';
// import read from '../utils/read-file.mjs';
import cardModel from '../models/card.mjs';

export const getCards = (req, res) => {
  cardModel.find({})
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'Нет такого файла' });
    });
};

export const createCard = (req, res) => {
  const { name, link } = req.body;
  cardModel.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(400).send(err));
};

export const deleteCard = (req, res) => {
  cardModel.findByIdAndRemove(req.params.id)
    .then(() => res.send({ message: 'deleted' }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
