import { rest } from 'msw';
import authHandlers from './auth';
import { delayedResponse } from './utils';

export const versionHandler = rest.get<never, never, string>('*/version', (req, res, ctx) => {
  return delayedResponse(ctx.status(200), ctx.text('0.1.0'));
});

export const handlers = [versionHandler, ...authHandlers];
