import { Response } from 'express';
import { getCurrentInvoke } from '@vendia/serverless-express';

import { NODE_ENV } from '../config';

export const hello = (_, res: Response) => {
  const { event } = getCurrentInvoke();
  res.json({
    ok: true,
    message: `Hello ${event.queryStringParameters?.name ?? 'John'}!`,
  });
};

export const stage = (_, res: Response) =>
  res.json({
    ok: true,
    message: `app stage: ${NODE_ENV}`,
  });
