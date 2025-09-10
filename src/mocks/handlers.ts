import { rest } from 'msw';
import pkg from '../../package.json' with { type: 'json' };

export const handlers = [
  rest.get('/addon-info', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pkg));
  }),
];
