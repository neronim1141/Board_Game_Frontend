import { rest } from 'msw';
import {
  LoginBody,
  LoginResponse,
  SigninBody,
  SigninResponse
} from '../../src/utils/models/auth/auth.dto.model';
import { delayedResponse } from '../utils';

export const loginHandler = rest.post<LoginBody, never, LoginResponse>(
  '*/auth/login',
  (req, res, ctx) => {
    return delayedResponse(
      ctx.status(200),
      ctx.json({
        user: { username: req.body.username, role: 'user' },
        token: 'token'
      })
    );
  }
);
export const signinHandler = rest.post<SigninBody, never, SigninResponse>(
  '*/users',
  (req, res, ctx) => {
    return delayedResponse(
      ctx.status(200),
      ctx.json({
        user: { username: req.body.username, role: 'unapproved' },
        token: 'token'
      })
    );
  }
);
