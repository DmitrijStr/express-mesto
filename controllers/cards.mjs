import path from 'path';
import read from '../utils/read-file.mjs';

const pathToData = path.join(path.resolve(), 'data', 'cards.json');

const getCards = (req, res) => {
  read(pathToData)
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'Нет такого файла' });
    });
};

export default getCards;
