import '@testing-library/jest-dom';
import { setLogger } from 'react-query';
import { server } from './mocks/server';
import { setUserMock } from './src/utils/test/test.utils';
import { vi } from 'vitest';

setLogger({
  warn: () => {},
  log: () => {},
  error: () => {}
});

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  setUserMock('session');
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

afterAll(() => server.close());
