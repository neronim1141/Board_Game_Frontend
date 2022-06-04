import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ForbiddenPage, HomePage, NotFoundPage } from '../pages';
import { ProtectedRoute } from './protected-route';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/protected"
        element={
          <ProtectedRoute guards={[false]}>
            <HomePage />
          </ProtectedRoute>
        }></Route>

      <Route path="/forbidden" element={<ForbiddenPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};
