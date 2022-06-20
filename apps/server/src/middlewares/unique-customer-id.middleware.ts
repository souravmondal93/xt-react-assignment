import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';

import { CONSTANTS } from '../constants';

const getCookie = ({ key, value, expiration }) => {
  return `${key}=${value}; HttpOnly; Path=/; Max-Age=${expiration}`;
};

export function generateUniqueCustomerId(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!req.cookies[CONSTANTS.CUSTOMER_COOKIE_KEY]) {
    const userId = randomUUID();

    req.res.setHeader('Set-Cookie', [
      getCookie({
        key: CONSTANTS.CUSTOMER_COOKIE_KEY,
        value: userId,
        expiration: CONSTANTS.CUSTOMER_COOKIE_EXPIRATION,
      }),
    ]);
  }

  next();
}
