import * as React from 'react';

import { render } from '@testing-library/react';
import { FunctionComponent, ReactElement, ReactNode } from 'react';

import { QueryClient } from 'react-query';
import { CurrentUser } from '../models/auth/auth.model';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Providers } from '../../appProviders';

export function renderWithRouter(
  component: ReactElement,
  {
    route = '*',
    queryClient = new QueryClient({
      defaultOptions: { queries: { retry: 0 } }
    })
  }: { route?: string; queryClient?: QueryClient } = {}
) {
  const Wrapper: FunctionComponent<{
    children?: ReactNode;
  }> = ({ children }) => (
    <Providers queryClient={queryClient}>
      <Router>
        <Routes>
          <Route path={route} element={<>{children}</>} />
        </Routes>
      </Router>
    </Providers>
  );
  window.history.replaceState({}, '', route);

  return {
    ...render(component, { wrapper: Wrapper }),
    history
  };
}

export const setUserMock = (
  where: 'local' | 'session',
  user: CurrentUser = { username: 'username', role: 'user' },
  token = 'random token'
) => {
  const { username, role } = user;
  if (where === 'local') {
    localStorage.setItem('user', JSON.stringify({ username, role }));
    localStorage.setItem('token', token);
  } else {
    sessionStorage.setItem('user', JSON.stringify({ username, role }));
    sessionStorage.setItem('token', token);
  }
};

export const clearUserMock = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('token');
};
