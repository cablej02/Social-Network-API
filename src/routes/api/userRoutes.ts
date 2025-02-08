// import User from '../../models/User';
import { Router, Request, Response } from 'express';
const router = Router();

router.route('/').get((_req: Request, res: Response) => {
    res.json({ message: 'Hello, world!' });
});

export default router;