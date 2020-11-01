import router from 'express';
import { getUsers, getUser } from'../controllers/users.mjs';

const usersRouter = router.Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);

export default usersRouter;
