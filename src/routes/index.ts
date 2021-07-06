import * as express from 'express';

import { hello, stage } from '../controllers';

const router = express.Router();

router.use('/hello', hello);
router.use('/stage', stage);

export default router;
