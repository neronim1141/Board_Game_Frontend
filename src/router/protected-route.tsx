import * as React from 'react';

import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router';

type GuardedRouteProps = { guards?: [boolean]; redirectPath?: string; children?: ReactNode };

export const ProtectedRoute: React.FC<GuardedRouteProps> = ({
  children,
  redirectPath = '/forbidden',
  guards = []
}) => {
  for (const guard of guards) {
    if (!guard) {
      return <Navigate to={redirectPath} replace />;
    }
  }
  return children ? <>{children}</> : <Outlet />;
};
