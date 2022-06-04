import { CurrentUser } from '../../models/auth/auth.model';
import { AuthAction, AuthActionType, LoginPayload } from './authContext.model';

export type AuthReducerState = {
  user?: CurrentUser;
  token?: string;
};

const handleLogIn = ({ username, role, save, token }: LoginPayload) => {
  sessionStorage.setItem('user', JSON.stringify({ username, role }));
  sessionStorage.setItem('token', token);
  if (save) {
    localStorage.setItem('user', JSON.stringify({ username, role }));
    localStorage.setItem('token', token);
  }
  return {
    user: { username, role },
    token
  };
};
const handleLogOut = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('token');
  return {};
};

export const authReducer = (state: AuthReducerState, action: AuthAction): AuthReducerState => {
  switch (action.type) {
    case AuthActionType.LogIn:
      return { ...state, ...handleLogIn(action.payload) };
    case AuthActionType.LogOut:
      return handleLogOut();
  }
};
