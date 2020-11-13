import router from 'express';
import { getCards, createCard, deleteCard } from '../controllers/cards.mjs';

const cardsRouter = router.Router();

cardsRouter.get('/', getCards);
cardsRouter.post('/', createCard);
cardsRouter.delete('/:id', deleteCard);

export default cardsRouter;
