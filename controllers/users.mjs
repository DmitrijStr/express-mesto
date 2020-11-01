import path from 'path';
import read from '../utils/read-file.mjs';

const pathToData = path.join(path.resolve(), 'data', 'users.json');

export const getUsers = (req, res) => {
  read(pathToData)
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'Нет такого файла' });
    });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  read(pathToData)
    .then((data) => {
      const user = data.find((item) => item._id === id);
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    });
};
