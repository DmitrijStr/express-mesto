import router from 'express';
import cardsRouter from './cards.mjs';
import usersRouter from './users.mjs';

const routerMethod = router.Router();

routerMethod.use('/users', usersRouter);
routerMethod.use('/cards', cardsRouter);
routerMethod.use('/*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

export default routerMethod;
