import router from 'express';
import getCards from '../controllers/cards.mjs';

const cardsRouter = router.Router();

cardsRouter.get('/', getCards);

export default cardsRouter;
