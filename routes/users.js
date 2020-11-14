const usersRouter = require('express').Router();
const { getUsers, getUser, postUser } = require('../controllers/users.js');

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', postUser);

module.exports = usersRouter;
