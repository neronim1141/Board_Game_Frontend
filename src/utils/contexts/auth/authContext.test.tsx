import { vi, expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider, useAuth, useAuthDispatch, useAuthState, AuthActionType } from '.';
import { clearUserMock, setUserMock } from '../../test/test.utils';

const TestComponent = ({ save = true }: { save?: boolean }) => {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated() ? (
        <>
          <span data-testid="username">{state.user?.username}</span>
          <span data-testid="role">{state.user?.role}</span>
          <span data-testid="token">{state.token}</span>
        </>
      ) : (
        'not authenticated'
      )}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: AuthActionType.LogIn,
            payload: {
              username: 'newUser',
              role: 'User',
              token: 'token',
              save
            }
          })
        }>
        Login
      </button>
      <button type="button" onClick={() => dispatch({ type: AuthActionType.LogOut })}>
        Logout
      </button>
    </>
  );
};

describe('Auth Context', () => {
  vi.spyOn(Storage.prototype, 'setItem');
  vi.spyOn(Storage.prototype, 'getItem');

  it('should throw no context error', () => {
    const consoleError = vi.spyOn(console, 'error');
    consoleError.mockImplementation(() => {});
    expect(() => render(<TestComponent />)).toThrow();
    consoleError.mockRestore();
  });

  it('no data in storage', async () => {
    clearUserMock();
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    screen.getByText('not authenticated');
  });

  it('user data in local storage', async () => {
    clearUserMock();
    setUserMock('local', { username: 'loaded username', role: 'Admin' });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    screen.getByText('loaded username');
    screen.getByText('Admin');
    screen.getByText('random token');
  });

  it('user data in local storage calls', async () => {
    clearUserMock();
    setUserMock('local', { username: 'loaded username', role: 'Admin' });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    //2 times session + 2 times localStorage
    expect(Storage.prototype.getItem).toBeCalledTimes(4);
  });

  it('user data in session storage', async () => {
    setUserMock('session', { username: 'loaded username', role: 'Admin' });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    screen.getByText('loaded username');
    screen.getByText('Admin');
    screen.getByText('random token');
  });

  it('user data in session storage calls', async () => {
    setUserMock('session', { username: 'loaded username', role: 'Admin' });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    //2 times session + 0 times localStorage
    expect(Storage.prototype.getItem).toBeCalledTimes(2);
  });

  it('user logout', async () => {
    setUserMock('local', { username: 'loaded username', role: 'Admin' });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    await userEvent.click(screen.getByRole('button', { name: 'Logout' }));
    screen.getByText('not authenticated');
  });

  it('user login with save', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));
    //2 from global set user + 2 from sessionStorage + 2 from localStorage
    expect(Storage.prototype.setItem).toBeCalledTimes(6);

    screen.getByText('newUser');
    screen.getByText('User');
    screen.getByText('token');
  });

  it('user login without save', async () => {
    clearUserMock();

    render(
      <AuthProvider>
        <TestComponent save={false} />
      </AuthProvider>
    );
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));
    //2 from global set user + 2 from sessionStorage
    expect(Storage.prototype.setItem).toBeCalledTimes(4);

    screen.getByText('newUser');
    screen.getByText('User');
    screen.getByText('token');
  });
});
