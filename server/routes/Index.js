import Router from 'express';
import TransactionRoute from './TransactionRoute';

const router = Router();

router.use('/transactions', TransactionRoute);

export default router;
