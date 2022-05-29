import { createContext, FunctionComponent, ReactNode, useReducer } from 'react';
import { useContextFallback } from '../context.utils';
import { authReducer, AuthReducerState } from './authReducer';
import { AuthAction } from './authContext.model';
import { retriveDataFromLocalStorage } from './auth.utils';

const AuthStateContext = createContext<AuthReducerState | undefined>(undefined);
const AuthDispatchContext = createContext<React.Dispatch<AuthAction> | undefined>(undefined);

export const AuthProvider: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    ...retriveDataFromLocalStorage()
  });
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContextFallback(AuthStateContext);

export const useAuthDispatch = () => useContextFallback(AuthDispatchContext);

const isAuthenticated =
  (state: AuthReducerState) =>
  (check = true) =>
    check === Boolean(state.user);

export const useAuth = () => {
  const ctx = useContextFallback(AuthStateContext);
  return {
    isAuthenticated: isAuthenticated(ctx)
  };
};
