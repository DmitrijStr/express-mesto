import router from 'express';
import { getUsers, getUser, postUser } from '../controllers/users.mjs';

const usersRouter = router.Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUser);
usersRouter.post('/', postUser);
export default usersRouter;
