const router = require('express').Router();
const cardsRouter = require('./cards.js');
const usersRouter = require('./users.js');

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);
router.use('/*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

module.exports = router;
