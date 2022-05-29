import { renderWithRouter } from '../utils/test/test.utils';
import { ProtectedRoute } from './protected-route';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('protected route', () => {
  test('should render', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute>Home</ProtectedRoute>}></Route>
        </Routes>
      </MemoryRouter>
    );
    screen.getByText('Home');
  });
  test('should render with outlet', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<>Home</>}></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
    screen.getByText('Home');
  });

  test('should redirect to forbidden', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute guards={[false]}>Home</ProtectedRoute>}></Route>
          <Route path="/forbidden" element={<>Forbidden</>}></Route>
        </Routes>
      </MemoryRouter>
    );

    screen.getByText('Forbidden');
  });

  test('should redirect to custom path', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute redirectPath="/custom" guards={[false]}>
                Home
              </ProtectedRoute>
            }></Route>
          <Route path="/custom" element={<>Forbidden</>}></Route>
        </Routes>
      </MemoryRouter>
    );

    screen.getByText('Forbidden');
  });
});
